import React, { Component, Fragment } from 'react';
import request from "superagent";

class Tabs extends Component {
    constructor() {
        super();

        this.state = {
            hardware: "active",
            software: "inactive"
        }

        this.isClicked = this.isClicked.bind(this);
    }

    isClicked(i) {
        if ((i == "hardware") && (this.state.hardware == "inactive")) {
            this.setState(state => {
                return {hardware: "active",
                    software: "inactive"};
            });
        }

        else if ((i == "software") && (this.state.software == "inactive")) {
            this.setState(state => {
                return {hardware: "inactive",
                    software: "active"};
            });
        }
    }

    render() {
        return (
            <div id="portfolio">
                <div id="tabs">
                    <div id={this.state.hardware} onClick={() => {this.isClicked("hardware")}}><h1 id="portfolio-text">Hardware</h1></div>
                    <div id={this.state.software} onClick={() => {this.isClicked("software")}}><h1 id="portfolio-text">Software</h1></div>
                </div>

                <InfiniteUsers />
                <div id="end" />
            </div>
        )
    }
}

export default Tabs;

class InfiniteUsers extends Component {
    constructor(props) {
        super(props);

        // Sets up our initial state
        this.state = {
            error: false,
            hasMore: true,
            isLoading: false,
            users: [],
        };

        // Binds our scroll event handler
        window.onscroll = () => {
            const {
                loadUsers,
                state: {
                    error,
                    isLoading,
                    hasMore,
                },
            } = this;

            // Bails early if:
            // * there's an error
            // * it's already loading
            // * there's nothing left to load
            if (error || isLoading || !hasMore) return;

            // Checks that the page has scrolled to the bottom
            if (
                window.innerHeight + document.documentElement.scrollTop + 1
                >= document.documentElement.offsetHeight
            ) {
                loadUsers();
            }
        };

        this.loadUsers = this.loadUsers.bind(this);
    }

    componentWillMount() {
        // Loads some users on initial load
        this.loadUsers();
    }

    loadUsers() {
        this.setState({ isLoading: true }, () => {
            request
                .get('https://randomuser.me/api/?results=100')
                .then((results) => {
                    // Creates a massaged array of user data
                    const nextUsers = results.body.results.map(user => ({
                        email: user.email,
                        name: Object.values(user.name).join(' '),
                        photo: user.picture.medium,
                        username: user.login.username,
                        uuid: user.login.uuid,
                    }));

                    // Merges the next users into our existing users
                    this.setState(state => {
                        return {
                        // Note: Depending on the API you're using, this value may
                        // be returned as part of the payload to indicate that there
                        // is no additional data to be loaded
                        hasMore: (this.state.users.length < 100),
                        isLoading: false,
                        users: [
                            ...this.state.users,
                            ...nextUsers,
                        ],
                    }});
                })
                .catch((err) => {
                    this.setState({
                        error: err.message,
                        isLoading: false,
                    });
                })
        });
    }

    render() {
        const {
            error,
            hasMore,
            isLoading,
            users,
        } = this.state;

        return (
            <div id="projects">
                <h1>Infinite Users!</h1>
                <p>Scroll down to load more!!</p>
                {users.map(user => (
                    <Fragment key={user.username}>
                        <hr />
                        <div style={{ display: 'flex' }}>
                            <img
                                alt={user.username}
                                src={user.photo}
                                style={{
                                    borderRadius: '50%',
                                    height: 72,
                                    marginRight: 20,
                                    width: 72,
                                }}
                            />
                            <div>
                                <h2 style={{ marginTop: 0 }}>
                                    @{user.username}
                                </h2>
                                <p>Name: {user.name}</p>
                                <p>Email: {user.email}</p>
                            </div>
                        </div>
                    </Fragment>
                ))}
                <hr />
                {error &&
                <div style={{ color: '#900' }}>
                    {error}
                </div>
                }
                {isLoading &&
                <div>Loading...</div>
                }
                {!hasMore &&
                <div>You did it! You reached the end!</div>
                }
            </div>
        );
    }
}
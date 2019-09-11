import ApolloClient, { Operation }  from "apollo-boost";

const client = new ApolloClient({
    clientState: {
        defaults: {
            groups: {
                __typename: "Groups",
                group: localStorage.getItem("X-GROUP") || ""
            }
        },
        resolvers: {
            Query: {
                GetGroups: (_, __, { cache }) => {
                    if(!localStorage.getItem('X-GROUP')) {
                        const tmpGroups: IGrouping[] = [
                            {
                                "groupName": "MyFirstGroup",
                                "email": "",
                                "password": "",
                                "checkedPDF": false,
                                "checkedSendEmail": false,
                                "checkedRESTFul": false
                            },
                            {
                                "groupName": "MySecondGroup",
                                "email": "",
                                "password": "",
                                "checkedPDF": true,
                                "checkedSendEmail": false,
                                "checkedRESTFul": false
                            }
                        ]
                        localStorage.setItem("X-GROUP", JSON.stringify(tmpGroups));
                        // cache.writeData({
                        //     data: {
                        //         groups: {
                        //             __typename: "Groups",
                        //             group: tmpGroups
                        //         }
                        //     }
                        // })
                        console.log("MYMYMYMYMYYMMYMYYM")
                    }
                    console.log("YOUYOUYOUYOUYOUYOU");
                    const groups = JSON.parse(localStorage.getItem("X-GROUP") || "");
                    return groups;
                }
            },
            Mutation: {
                AddGroup: (_, args: IGrouping, { cache }) => {
                    var currentData: object[] = JSON.parse(localStorage.getItem('X-GROUP') || "");
                    console.log("APollo ARgs: ", args);
                    currentData[currentData.length] = {
                        ...args
                    };
                    localStorage.setItem("X-GROUP", JSON.stringify(currentData));
                    return currentData;
                },
                DeleteGroup: (_, args, { cache }) => {
                    return null;
                }
            }
        }
    },
    uri: "http://localhost:4000/app_graphql",
    headers: (operation: Operation) => {
        operation.setContext({
            headers: {
                "X-GROUPs": localStorage.getItem("X-GROUP") || ""
            }
        })
    }
});

export default client;
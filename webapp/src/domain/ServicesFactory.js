// Dependences from: ~/domain
import CurrentUserService from "../../domain/currentUser/CurrentUserService";
import FriendsService from "../../domain/friends/FriendUsersService";

function forCurrentUser() {
    return new CurrentUserService();
}

function forFriendUsers() {
    return new FriendsService();
}

export { forCurrentUser, forFriendUsers };
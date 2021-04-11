// Dependences from: ~/domain
import CurrentUserService from "./currentUser/CurrentUserService";
import FriendsService from "./friends/FriendUsersService";

class ServicesFactory {
    static forCurrentUser() {
        return new CurrentUserService();
    }

    static forFriendUsers() {
        return new FriendsService();
    }
}

export default ServicesFactory;
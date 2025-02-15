import userService from "../services/user.service.js";
import jwtProvider from "../config/jwtProvider.js";

const userservice = userService();
const jwtprovider = jwtProvider(); // ✅ Import JWT provider to decode tokens

const userController = () => {
    return {
        getUserProfile: async (req, res) => {
            try {
                const token = req.headers.authorization?.split(" ")[1]; // ✅ Extract token from "Bearer <token>"

                if (!token) {
                    return res.status(400).json({ error: "Token not found" });
                }

                // ✅ Decode the token and extract userId
                const decoded = jwtprovider.verifyToken(token);
                const userId = decoded.userId; // ✅ Extract correct userId

                if (!userId) {
                    return res.status(400).json({ error: "Invalid token" });
                }

                // ✅ Now pass userId instead of the token
                const user = await userservice.findUserById(userId);
                console.log("User Profile:", user);

                return res.status(200).json(user);
            } catch (error) {
                return res.status(500).json({ error: error.message });
            }
        },

        getAllUsers: async (req, res) => { // ✅ Added missing req, res parameters
            try {
                const users = await userservice.getAllUsers();
                return res.status(200).json(users);
            } catch (error) {
                return res.status(500).json({ error: error.message });
            }
        },
    };
};

export default userController;

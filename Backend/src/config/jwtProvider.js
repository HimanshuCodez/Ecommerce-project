import jwt from 'jsonwebtoken';

const SECRET_KEY = "jbnijfbgpughpuorthornfjgonboj";

const jwtProvider = () => {
    return {
        generateToken: (userId) => {
            return jwt.sign({ userId }, SECRET_KEY, { expiresIn: "48h" });
        },

        verifyToken: (token) => {  
            try {
                return jwt.verify(token, SECRET_KEY);
            } catch (error) {
                throw new Error("Invalid token");
            }
        },

        getUserIdFromToken: (token) => {
            const decodedToken = jwt.verify(token, SECRET_KEY);
            return decodedToken.userId;
        }
    };
};

export default jwtProvider;

import jwt from 'jsonwebtoken';

const SECRET_KEY = "jbnijfbgpughpuorthornfjgonboj";


const jwtProvider = () => {
    return {
        generateToken: (userId) => {
            const token = jwt.sign({ userId }, SECRET_KEY, { expiresIn: "48h" });
            return token;
        },
        getUserIdFromToken:(token) => {
            const decodedToken = jwt.verify(token, SECRET_KEY);
            return decodedToken.userId;
        }
    }
    }
export default  jwtProvider 

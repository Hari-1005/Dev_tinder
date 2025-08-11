export const userAuth = (req, res, next) => {
    const secretKey = "haritej";
    if(secretKey !== "hariteja"){
        return res.status(401).json({ message: "Unauthorized access" });
    }
    next();
}
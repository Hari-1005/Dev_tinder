export const getAllUsers = (req,res) => {
    res.status(200).json("all users")
}

export const getSingleUser = (req,res) => {
    res.status(200).json("single user data")
}
export const changeUser = (req,res) => {
    res.status(200).json("changed user data")
}
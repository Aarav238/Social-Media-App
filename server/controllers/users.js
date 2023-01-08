import User from "../models/User";

//READ

export const getUser = async(req,res) => {
    try {
        const {id} = req.params;
        const user = await User.findById(id);
        res.status(200).json(user);
        
    } catch (err) {
        res.status(404).json({message: err.message});
        
    }
}

export const getUserFriends = async(req,res) => {
    try{

        const {id} = req.params;
    const user = await User.findById(id);

    const friends = await Promise.all(
        user.friends.map((id) => User.findById(id))
    );

    const formattedFriends = friends.map(
        ({_id , firstName, lastName, occupation, location, picturePath}) => {
            return {_id , firstName, lastName, occupation, location, picturePath};
        }
    );

    res.status(200).json(formattedFriends);
    }
    catch(err) {
        res.status(404).json({message: err.message});

    }
    

};


//Update

export const addRemoveFriend = async(req,res) => {
    try {
        
    } catch (err) {
        res.status(404).json({message : err.message});
        
    }
}
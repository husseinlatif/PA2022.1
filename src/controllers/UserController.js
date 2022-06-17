const User = require('../models/User')
const sequelize = require('../config/sequelize')


const index = async(req,res) => {
    try {
        const user = await User.findAll();
        return res.status(200).json({user});
    }catch(err){
        return res.status(500).json({err});
    }
};


const show = async(req, res) => { 
    try {
        const {id} = req.params;
        const user = await User.findByPk(id);
        return res.status(200).json({user});
    } catch (err) {
        return res.status(500).json({err});
    }
};


const create = async(req,res) => {
    const newUserData = {
        username: req.body.username,
        email: req.body.email,
        inclusionDate: Date.now(),
        alterationDate: null,
        rules: req.body.rules,
        status: req.body.status
    }

    try {
        const user = await User.create(newUserData);
        return res.status(201).json({user});
    }catch(err){
        return res.status(500).json({err});
    }
};


const update = async(req,res) => {
    const newUserData = {
        username: req.body.username,
        email: req.body.email,
        alterationDate: Date.now(),
        rules: req.body.rules,
        status: req.body.status
    }

    const {id} = req.params;

    try {
        const [updated] = await User.update(newUserData, {where: {id: id}});
        if(updated) {
            const user = await User.findByPk(id);
            return res.status(200).send(user);
        }
        throw new Error('Usuário não encontrado.');
    } catch(err){
        return res.status(500).json({err});
    }
};


const destroy = async(req,res) => {
    const {id} = req.params;

    try {
        const deleted = await User.destroy({where: {id: id}});
        if(deleted) {
            return res.status(200).json("Usuario deletado com sucesso.");
        }
        throw new Error ("Usuario nao encontrado.");
    } catch(err){
        return res.status(500).json({err});
    }
};


module.exports = {
    index,
    show,
    create,
    update,
    destroy,
}
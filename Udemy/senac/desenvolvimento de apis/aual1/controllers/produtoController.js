import { Produto } from "../models/Produto";


export const produtoIndex = async(req,res)=>{
   try{
    const produtos = await Produto.findAll()
    res.status(200).json(produtos)
   }catch(error){
    res.status(400).send(error)
   }
}


export const produtoStore= async(req,res)=>{
    const {descricao,quant,preco,marca} = req.body

    try{
        const novo = await Produto.create({
            descricao,
            marca,
            quant,
            preco
        })
    
    res.status(2001).json(novo)
   }catch(error){
    res.status(400).send(error)
   }
}
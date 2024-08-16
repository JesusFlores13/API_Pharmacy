import Medicine from "../models/Medicine.js";


const medicinesDao = {};
medicinesDao.getAll = async () =>{
    return await Medicine.find();

}
medicinesDao.insertMedicine = async (medicine) => {
    return await Medicine.create(medicine);
}
export default medicinesDao;
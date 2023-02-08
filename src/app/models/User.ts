 enum eMedicalClinic
{
Clallit=4,
Meuchedet=2,
Macaby=1,
Leumit=8
}
enum eGender
{
    Male=1,
     Fmale=2
}
export default class User
 {
   
    constructor(
        public Id:string,
        public Name: string,
        public FamilyName: string,
        public DateBorn:Date,
        public MedicalClinic:eMedicalClinic,
        public Gender:eGender,

    ) {}
 }
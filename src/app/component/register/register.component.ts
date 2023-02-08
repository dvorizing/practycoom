import { Component } from '@angular/core';
 import { UserService } from 'src/services/user.service';
 import Child from 'src/app/models/Child';
 import User from 'src/app/models/User';
import { ChildService } from 'src/services/child.service';
import { Workbook } from 'exceljs'
import { saveAs } from 'file-saver';
import { NgFor } from '@angular/common';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  child:Child=new Child("","",new Date(),"")
  constructor(public userSer: UserService,public childSer:ChildService) {}
//localStorage  בתחילה עשיתי עם  
//אך פשוט הרבה יותר לקבל משתנה מ service 
//המכיל בתוכו את כל הערכים הנדרשים(פונ' משתנים )
//וכן הדרישה לשמירת הנתונים במעבר בדפים תתבצעה ממילא
istrue:boolean;
save(form)
  {
    //למניעת תעודת זהות חוזרת
   this.userSer.GetUserById(this.userSer.user.Id).subscribe(succ=>
    {
      if(succ==null)
     {
      console.log(this.userSer.user)
      console.log(this.childSer.childArr)
      this.doulend();
      this.userSer.user.Gender=(this.userSer.user.Gender)
      this.userSer.user.MedicalClinic=(this.userSer.user.MedicalClinic)
      this.userSer.PostUser(this.userSer.user).subscribe(succ=>console.log(succ));
      for (let  item =0;item<this.childSer.childArr.length;item++){
        this.childSer.childArr[item].ParentId=this.userSer.user.Id;
        this.childSer.PostChild( this.childSer.childArr[item]).subscribe(succ=>console.log(succ));
      }
    }
    else alert("this id alredy exsist")
    }) 
  }
  
       // localStorage.setItem("user", JSON.stringify(succ)); console.log(this.myUser.Name)
      //  this.userSer.saveUser(this.myUser)
      // (succ => { 
      //   this.userService.saveUser(succ)
   addChild(name,date,password){
    this.childSer.childArr.push(this.child);
    name.value="";
    date.value="";
    password.value="";
  }
  doulend(){
    const workbook = new Workbook();
    const worksheet = workbook.addWorksheet('My Sheet');
    worksheet.addRow(['ID', 'tName','FamilyName', 'DateBorn','Gender','MedicinClinic','Child Name', 'Child ID', 'Child DateBorn'])
    worksheet.addRow([this.userSer.user.Id, this.userSer.user.Name,this.userSer.user.FamilyName,this.userSer.user.DateBorn,this.userSer.user.Gender,this.userSer.user.MedicalClinic,'','','']);
    this.childSer.childArr.forEach((child) => {
      worksheet.addRow(['', '', '','','','', child.FamilyName, child.Id, child.DateBorn]);
    });
    workbook.xlsx.writeBuffer().then((data) => {
      const blob = new Blob([data], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
      saveAs(blob, 'data.xlsx');
    });
  }
  ngOnInit(): void { }
}
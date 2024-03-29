import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/Services/user.service';
import { AuthenticationService } from 'src/app/Services/authentication.service';
import { User } from 'src/app/Model/user.model';

@Component({
  selector: 'app-approve-user',
  templateUrl: './approve-user.component.html',
  styleUrls: ['./approve-user.component.css']
})
export class ApproveUserComponent implements OnInit {

  constructor(private userService:UserService,private authenticateService:AuthenticationService) { }
  users:User[];
  pendingUsers:User[];
  listSize:number;
  ngOnInit() {

    this.userService.getAllUsers().subscribe((user:User[])=>{
      this.users = [...user];
      console.log("1"+this.users);
      console.log("hi");
    })
    this.listSize = this.users.length;
  }

  fetchUser(){
    this.userService.getAllUsers().subscribe((user:User[])=>{
      this.users = [...user];
      
      console.log("1"+this.users);
      console.log("hi");
    })
    this.listSize = this.users.length;
  }
  onApproving(userId:number){
    console.log("onApproving function");
    console.log(userId);
    
      this.userService.approveUser(userId).subscribe(()=>{
          console.log("subs");
          this.fetchUser();
          
      });
    
     

  
}

onDeclining(userId:number){
  console.log("onApproving function");
  console.log(userId);

    this.userService.declineUser(userId).subscribe(()=>{
        console.log("subs");
        this.fetchUser();
        
    });
    
   

  }

}

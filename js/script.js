alert("hi there!")

function code(){
    var name = document.getElementById("Name").value;
    var d = new Date();
    var day = document.getElementById("day").value;
    var month = document.getElementById("month").value -1;
    var year = document.getElementById("year").value;


    if (day < 0 || day > 31) {
        alert("Enter correct date");
            
        }
        else if (day == "") {
            alert("Fill in the blank");
            
        }
        else {
        d.setDate(day); 
        }



        if (month <= 0 || month > 12) {
            alert("Enter correct month");
            
        }
        else if (month == "") {
            alert("Fill in the blank");
            
        }
        else {
         d.setMonth(month); 
        } 


        
        if (year < 0 || year > 2050) {
            alert("Enter correct year");
        }
        else if (year == "") {
            alert("Fill in the blank");
            
        }
        else {
         d.setYear(year);
        }
        

        var date = d.getDay();
        var days = ["Sun","Mon","Tue","Wed","Thur","Fri","Sat"];
        var male = ["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"];
        var female = ["Akoswa","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"];

        function getAkan(){
            var ismale = document.getElementById("male").checked;
            var isfemale = document.getElementById("female").checked;

            if(ismale == true && isfemale == false) {

            
                if(date == 0 ) {
                    alert("Your Akan name is "+ male[0]);
                    
                }
                else if (date == 1) {
                    alert("Your Akan name is "+ male[1]);
                    
                }
                else if (date == 2) {
                    alert("Your Akan name is "+ male[2]);
                }
                else if (date == 3) {
                    alert("Your Akan name is "+ male[3]);
                    
                }
                else if (date == 4) {
                    alert("Your Akan name is "+ male[4]);
                    
                }
                else if (date == 5){
                    alert("Your Akan name is "+ male[5]);
                    
                }
                else if (date == 6) {
                    alert("Your Akan name is "+ male[6]);
                    
                }
                else{
                    alert();
                }
            }

            else if(isfemale == true && male == false) {

                    if (date == 0 ) {
                            alert("Your Akan name is "+ male[0]);
                            
                        }
                        else if (date == 1) {
                            alert("Your Akan name is "+ male[1]);
                            
                        }
                        else if (date == 2) {
                            alert("Your Akan name is "+ male[2]);
                            
                        }
                        else if (date == 3) {
                            alert("Your Akan name is "+ male[3]);
                            
                        }
                        else if (date == 4) {
                            alert("Your Akan name is "+ male[4]);
                            
                        }
                        else if (date == 5) {
                            alert("Your Akan name is "+ male[5]);
                            
                        }
                        else if (date == 6) {
                            alert("Your Akan name is "+ male[6]);
                            
                        }
                        else{
                        alert("Enter correct details"); 
                            
                        }
                    }        
            else{
                alert("enter correct details");
            }                          
        }
        getAkan(); 
}
            
        
        
    

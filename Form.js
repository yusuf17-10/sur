class Form{
    constructor(){
        this.input = createInput("emailId");
        this.button = createButton("next");
        this.greeting=createElement("h3");
        this.greeting2=createElement( "h3");
        this.greeting3=createElement("h3");

        this.button2=createRadio();
        this.button2.option("yes"); 
        this.button2.option("no");

            this.button5 = createRadio();
            this.button5.option("yes"); 
            this.button5.option("no");


            this.button6 = createRadio();
            this.button6 .option("500");
            this.button6 .option("1000");
            this.button6 .option("more");
            this.button6 .option("100");

            this.button2.hide();
            this.button5.hide();
            this.button6.hide();

            this.flag=0;

            this.submit = createButton("submit");

      
    }
    hide(){
        this.input.hide();
        this.button.hide();

        this.submit.hide();
       

       
    }

    display(){
        var title = createElement('h2');
        title.html("survey");
        title.position(displayWidth/2-40,0);
        if(this.flag===0){
            this.submit.hide();
        }
        

       this.input.position(displayWidth/2-50,displayHeight/2-80);
       this.button.position(displayWidth/2-50,displayHeight/2);
       this.submit.position(500,500);
      
        this.button.mousePressed(()=>{
            this.input.hide();
            this.button.hide();

            this.flag=1;
            
           this.button2.show();
           this.button5.show();
           this.button6.show();
           this.submit.show();





            this.button2.position(400,150);
            this.button2.position(400,200);
            this.button2.position(400,300);

            this.button5.position(400,150);
           /* this.button5.position(400,320);
            this.button5.position(400,300);*/


            this.button6.position(400,450);
           /* this.button6.position(400,480);
            this.button6.position(400,510);
            this.button6.position(400,540);*/
            
        




            user.name= this.input.value();
            userCount++;
            user.index=userCount;
            user.update();
            user.updateCount(userCount);

           this.greeting.html("Q1. Do you think we need to have free lunch meals in our school canteen for the kids who are very poor? ");
           this.greeting.position(displayWidth/2-500,displayHeight/6-50);

           this.greeting2.html("Q2. Would you be willing to contribute a small amount every month for such aprogram?");
            this.greeting2.position(displayWidth/2-500,displayHeight/3);

            this.greeting3.html("Q3. How much per month would you be willing to pay?");
            this.greeting3.position(displayWidth/2-500,displayHeight/2)


           
        });

        this.submit.mousePressed(()=>{
            user.answer[0]=this.button2.value(); 
            user.answer[1]=this.button5.value();
            user.answer[2]=this.button6.value();
        });
        
        user.update();

    }
}
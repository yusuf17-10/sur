var database;
var form;
var userCount=0;
var user;

function setup() {
  createCanvas(800,400);
  database=firebase.database();

  user = new User();
  form = new Form();

}

function draw() {
    clear();
  form.display();



  
}
<?php


interface Tree {
  
    public function sound();
    public function die();
}


abstract class  Personne implements Tree {
  protected int $id;
  protected string $name;
  protected string $lastname;
  protected string $gender;


  public function __construct( $id,$name,$lastname) {
    $this->id= $id;
    $this->name=$name;
    $this->lastname=$lastname;
  }


public abstract function gender ();

  public function sound(){
    echo " saye helle word";
    
  }

  public function die(){
    echo "im diening and . $this->name";
    
  }

}



class Male extends Personne {
    public function __construct($id, $name, $lastname) {
        parent::__construct($id, $name, $lastname);
    }

    public function gender() {
        echo "I am " . $this->name;
    }


    public function sound(){
        echo " saye helle word". $this->lastname;
        
      }
    
      public function die(){
        echo "im diening and  $this->name";
        
      }
}




class Femmail extends Personne {

public function __construct($id,$name,$lastname) {
    parent::__construct($id,$name,$lastname) ;

}


public function gender() {
    echo   $this->name;
}

public function sound(){
    echo " saye helle word". $this->lastname;
    
  }

  public function die(){
    echo "im diening and  $this->name";
    
  }
}

$test = new Male (2,"hamza","bkr");
$test -> gender();
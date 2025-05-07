<?php 
interface Word{
    public function speke() ;
}


abstract class Persone{
protected string $name;
protected string  $lastname;
protected string $age;

private string $address;


public function __construct($name,$lastname,$age,$address) {
    $this->name=$name;
    $this->lastname=$lastname;
    $this->age=$age;
    $this->address=$address;

}


abstract public function voise();
   
public function getAddress(){
    return   $this->address;
}

public function setAddress($newaddres){
$this->address=$newaddres;
}

}



class Male extends Persone {
private int $telephone;

public function __construct($name,$lastname,$age,$telephone,$address) {
    parent::__construct($name,$lastname,$age,$address);
    $this->telephone=$telephone;
}

public function voise(){
    echo " my addres ".$this->getaddress();
}

}

$valore = new Male("Omar", "El Khattabi", "28", 123456789, "Fes");

$valore->voise();




class male01{
    protected $name;
}


<?php

declare(strict_types=1);


class User{

  private string $name;
  private string $email;
  private Cart $cart;
  private array $orders=[];

  public function __construct($name,$email) {
  $this->name=$name;
  $this->email=$email;

  }

  public function addOrder($order){
    $this->orders=$order;
  }

  public function __get($param) {
    return $this->$param;
    
  }


}


trait totale{
  public function getTotalePrice(){
    $totale=0;
    foreach($this->prodacts as $prodact){
      $totale+= $prodact->getprice();
    }
    
    return $totale;
  }

}

class Order{


use totale;
  private User $user;
  private array $prodacts =[];

  public function __construct( User $user) {
  $this->user=$user;

  }

  public function addProdcut($prodact){
    $this->prodacts[]=$prodact;
  }
  
}




class Product{


private string $reference;
  private string $name;
  private float $prise;

  public function __construct(  $name ,$prise,$reference) {
  $this->name=$name;
  $this->prise=$prise;
  $this->reference=$reference;
  }

  public function getprice($prise){
    return $this->$prise;
  }
  

}

class Cart{

  use totale;

  private User $user;
  private array $prodacts =[];
  
  
  
  public function __construct( User $user) {
    $this->user=$user;
    }
  
  
    
  public function addProdcut($prodact){
    $this->prodacts[]=$prodact;
  }
  
  }



abstract class Payment {

}



$user=new User("amine","aùine");
$product1=new Product("11","satd",123);
$product2=new Product("22","yatsfd",222);
$cart=new Cart($user);
$order=new Order($user);

$order->addProdcut($product1);
$order->addProdcut($product2);

$user->addOrder( $order);
$user->addOrder( $order1);
$user->addOrder( $order2);


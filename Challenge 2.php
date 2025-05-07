<?php

abstract class CompteBancaire {
    protected string $titulaire;
    protected float $solde;

    public function __construct(string $titulaire, float $soldeInitial = 0) {
        $this->titulaire = $titulaire;
        $this->solde = $soldeInitial;
    }

    public function deposer(float $montant): void {
        if ($montant > 0) {
            $this->solde += $montant;
        }
    }

    public function retirer(float $montant): void {
        if ($montant > 0 && $montant <= $this->solde) {
            $this->solde -= $montant;
        }
    }

    public function afficherSolde(): void {
        echo "{$this->titulaire} : Solde = {$this->solde}€\n";
    }

    abstract public function calculerInteret(): float;
}


class CompteCourant extends CompteBancaire {
    public function calculerInteret(): float {
        return 0;
    }
}

class CompteEpargne extends CompteBancaire {
    public function calculerInteret(): float {
        return $this->solde * 0.03;
    }

    public function appliquerInteret(): void {
        $this->solde += $this->calculerInteret();
    }
}



class Banque {
    private array $comptes = [];

    public function ajouterCompte(CompteBancaire $compte): void {
        $this->comptes[] = $compte;
    }

    public function afficherSoldes(): void {
        foreach ($this->comptes as $compte) {
            $compte->afficherSolde();
        }
    }

    public function appliquerInterets(): void {
        foreach ($this->comptes as $compte) {
            if ($compte instanceof CompteEpargne) {
                $compte->appliquerInteret();
            }
        }
    }
}

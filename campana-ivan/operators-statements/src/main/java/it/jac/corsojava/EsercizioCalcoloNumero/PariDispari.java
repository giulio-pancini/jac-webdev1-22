package it.jac.corsojava.EsercizioCalcoloNumero;
import java.util.Scanner;

public class PariDispari {
	public static void main(String[] args){
		Scanner scan = new Scanner(System.in);
	
		int numeroCicli = 5;
		int max =0;
		for(int i=1; i<=numeroCicli; i++) {
			
		max = leggiNumeroCalcoloMax(scan, i, max);
			
		}
		
		System.out.println("il numero massimo è: " + max);
	}
	private static int leggiNumeroCalcoloMax(Scanner scanner, int turno, int max) {
	
			System.out.println("inserisci numero " + turno);
			String str = scanner.nextLine();
			int numero = Integer.parseInt(str);
			if(numero > max){
				max=numero;
			}
			
			return max;
	}
}

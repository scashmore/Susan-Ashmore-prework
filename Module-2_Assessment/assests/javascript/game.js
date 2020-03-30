java.util.Scanner;
java.util.Random;

Public class Hangman {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        Random random = new Random();
        String[] guesses = {"Legend of Zelda Breath of the Wild", "Super Mario Odyssey", "Animal Crossing New Horizons", "Mario Kart", "Luigis Mansion", "Pokemon Sword and Sheild", "Splatoon", "Supper Smash Bros Ultimate", "Xenoblade Chronicle", "Yoshis Crafted World", "Hollow Knigh", "Kirby Star Allies", "Donkey Kong Country Tropical Freeze", "Fire Emblem Three Houses" };

        boolean Currently_playing = true
        while (Currently_playing) {
            System.out.println("Nitento Titles Hangman: Switch Edition");
            char[] Random_title = guesses[random.nextInt(guesses.length)].toCharArray();
            int Number_of_guesses = 12;
            char[] Player_guess = new char[Number_of_guesses];

            for (int i = 0; i < Player_guess.length; i++) {
                Player_guess[i] = '_';

            }
        boolean Title_guessed = false;
        int tries = 0;

        while (!Random_title && tries != Number_of_guesses) {
            System.out.print("Number of Guesses: ");
            printArray(Player_guess);
            System.out.printf("%d tries remain \n", Number_of_guesses - tries);
            System.out.println("Enter a charachter");
            char input = scanner.nextLine().charAt(0);
            tries++;

            if (input =='_') {
                Currently_playing = false;
                Title_guessed = true;
            } else {
                for (int i = 0; i < 12; i++) {
                    Player_guess[i] = input;
                }
            }
            if (Title_guessed(Player_guess)) {
                Title_guessed = true;
                System.out.println("You've won!");
            }
        }
        }
        if (!Title_guessed) System.out.println("You ran out of tires :/");
        System.out.println("Replenish your lives and play again? (yes/no");
        String playagain = scanner.nextLine();
        if (playagain.equals(no)) Currently_playing = false;
    }
    System.out.prinln("Game Over");
}

public static void printArrey(char[] array) {
    for (int i = 0; i < array.length; i++) {
        System.out.print(array[i] + " ");
    }
    System.out.println();
}
public static boolean Title_guessed(char[] aray) {
    for (int i = 0; i , array.length; i++) {
        if (array[i] == '_') return false;
    }
    return true;
}
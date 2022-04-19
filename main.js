const mensajeMenu = "_______Mundiales FIFA desde 2002 hasta 2018_______\n" +
                    "Informacion / estadisticas de cada uno:\n" +
                    "\n" +
                    "1. Corea del Sur / Japon 2002\n" +
                    "2. Alemania 2006\n" +
                    "3. Sudafrica 2010\n" +
                    "4. Brasil 2014\n" +
                    "5. Rusia 2018\n" +
                    "6. Salir\n";

salir = true;
while (salir) {
    let entrada = prompt(mensajeMenu);
    switch (entrada) {
        case "1":
            alert (
                "Campeon: Brasil\n" +
                "Subcampeon: Alemania\n" +
                "Tercero: Turquia\n" +
                "Cuarto: Corea del Sur\n" +
                "Mejor Jugador: Oliver Kahn\n" +
                "Goleador: Ronaldo Nazario (8 goles)\n" +
                "Mejor Arquero: Oliver Kahn\n" +
                "Mejor jugador Joven: Landon Donovan\n" +
                "Fair play: Belgica"
            );
            break;

        case "2":
            alert (
                "Campeon: Itaia\n" +
                "Subcampeon: Francia\n" +
                "Tercero: Alemania\n" +
                "Cuarto: Portugal\n" +
                "Mejor Jugador: Zinedine Zidane\n" +
                "Goleador: Miroslav Klose (5)\n" +
                "Mejor Arquero: Gianluigi Buffon\n" +
                "Mejor jugador Joven: Lukas Podolski\n" +
                "Fair play: Braisl / España"
            );
            break;

        case "3":
            alert (
                "Campeon: España\n" +
                "Subcampeon: Paises Bajos\n" +
                "Tercero: Alemania\n" +
                "Cuarto: Uruguay\n" +
                "Mejor Jugador: Diego Forlan\n" +
                "Goleadores:\n" +
                "           Thomas Muller\n" +
                "           David Villa\n" +
                "           Wesley Sneijder\n" +
                "           Diego Forlan (5)\n" +
                "Mejor Arquero: Gianluigi Buffon\n" +
                "Mejor jugador Joven: Lukas Podolski\n" +
                "Fair play: España"
            );
            break;

        case "4":
            alert(
                "Campeon: Alemania\n" +
                "Subcampeon: Argentina\n" +
                "Tercero: Paises Bajos\n" +
                "Cuarto: Brasil\n" +
                "Mejor Jugador: Lionel Messi\n" +
                "Goleador: James Rodriguez (6)\n" +
                "Mejor Arquero: Manuel Neuer\n" +
                "Mejor jugador Joven: Paul Pogba\n" +
                "Fair play: Colombia"
            );
            break;

        case "5":
            alert(
                "Campeon: Francia\n" +
                "Subcampeon: Croacia\n" +
                "Tercero: Belgica\n" +
                "Cuarto: Inglaterra\n" +
                "Mejor Jugador: Luka Modric\n" +
                "Goleador: Harry Kane (6)\n" +
                "Mejor Arquero: Thibaut Courtois\n" +
                "Mejor jugador Joven: Kylian Mbappe\n" +
                "Fair play: España"
            );
            break;

        default:
            alert("Opcion no asignada.");
            break;

        case "6":
            salir = false;
            break;
    }
}
alert("Nos vemos en Qatar 2022!");
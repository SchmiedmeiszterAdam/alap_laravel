<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="csrf-token" content=<?php $token = csrf_token();
                                    echo $token; ?>>
    <title>A zöld Földért</title>
    <link rel="stylesheet" href="css/stilus.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script src="js/Ajax.js"></script>
    <script src="js/script.js"></script>
</head>

<body>
    <main>
        <header>
            <h1>Kizöldítjük a Földet</h1>
        </header>
        <article>
            <fieldset id="uj-tev">
                <legend>Mit tettél ma a Földért?</legend>
                <select id="osztaly-valaszto"></select>
                <select id="tevekenyseg-valaszto"></select>
                <input type="button" value="Küld" id="tev-kuldes">
            </fieldset>
        </article>
        <div id="chart-tarolo"></div>
        <section id="tev-tarolo">
            <table id="tevekenyesegek">
            </table>
        </section>
    </main>
</body>

</html>
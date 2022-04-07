$(function () {
    const token=$('meta[name="csrf-token"]').attr('content');
    const osztalyok = ["szf1A", "szf2A", "szf2A", "iru1", "iru2"]
    const ajax = new Ajax(token)
    const tevekenysegek = []
    const bejegyzesek = []
    ajax.getAjax("/bejegyzesek?expand[]=tevekenyseg", bejegyzesek, bejegyzesekMegjelenitese)
    ajax.getAjax("/tevekenysegek", tevekenysegek, tevekenysegekKilistazasa)
    osztalyokKilistazasa()
    function tevekenysegekKilistazasa(tomb) {
        $("#tevekenyseg-valaszto").empty()
        $("#tevekenyseg-valaszto").append("<option disabled selected>Válassz tevékenységet!</option>")
        tomb.forEach(element => {
            $("#tevekenyseg-valaszto").append("<option id = " + element.tevekenyseg_id + ">" + element.tevekenyseg_nev + "</option>")
        });
    }
    function osztalyokKilistazasa() {
        $("#osztaly-valaszto").empty()
        $("#osztaly-valaszto").append("<option disabled selected>Válassz osztályt!</option>")
        osztalyok.forEach((element, index) => {
            $("#osztaly-valaszto").append("<option id = " + index + ">" + element + "</option>")
        });
    }
    function bejegyzesekMegjelenitese(tomb) {
        $("#tevekenyesegek").empty()
        $("#tevekenyesegek").append("<thead><th>Osztály</th><th>Tevékenység</th><th>Pont</th><th>Státusz</th></></thead>")
        $("#tevekenyesegek").append("<tbody></tbody>")
        for (let i = 0; i < tomb.length; i++) {
            const element = tomb[i];
            $("#tevekenyesegek tbody").append("<tr><td>" + osztalyok[element.osztaly_id] + "</td><td>" + element.tevekenyseg.tevekenyseg_nev + "</td><td>" + element.tevekenyseg.pontszam + "</td><td>" + element.allapot + "</td></tr>")
        }
    }
    $("#tev-kuldes").on("click", function () {
        const adat = {}
        
        var tevekenysegOptions = $("#tevekenyseg-valaszto")[0].options;
        let tevekenysegErtek = $(tevekenysegOptions[tevekenysegOptions.selectedIndex]).attr("id")
        var osztalyOptions = $("#osztaly-valaszto")[0].options;
        let osztalyErtek = $(osztalyOptions[osztalyOptions.selectedIndex]).attr("id")

        let json = '{ "tevekenyseg_id" : "' + tevekenysegErtek + '"}'
        fuz()
        json = '{ "osztaly_id" : "' + osztalyErtek + '"}'
        fuz()
        json = '{ "allapot" : "jováhagyásra vár"}'
        fuz()
        console.log(adat)
        ajax.postAjax("/bejegyzesek", adat)

        function fuz(){
            let obj = jQuery.parseJSON(json)
            $.extend(adat, obj)
        }
    })
})
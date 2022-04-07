class Ajax {
    constructor(token) {
        this.token = token
    }
    getAjax(apivegpont, tomb, myCallBack) {
        tomb = [];
        $.ajax({
            url: apivegpont,
            type: "GET",
            success: (result) => {
                result["data"].forEach((element) => {
                    tomb.push(element);
                });
                myCallBack(tomb);
            }
        });
    }
    postAjax(apivegpont, adat) {
        adat._token = this.token
        $.ajax({
            headers: { "X-CSRF-TOKEN": this.token },
            url: apivegpont,
            type: "POST",
            data: adat,
            success: function (result) {
                window.location.reload();
            }
        });
    }
}
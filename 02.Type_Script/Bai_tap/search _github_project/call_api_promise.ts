function search() {
    interface ISingleRepo {
        name: string;
    }

    interface IRepos {
        items: Array<ISingleRepo>;
    }

    console.log("start");
    let keyword = (document.getElementById("keyword") as HTMLInputElement).value;
    console.log(keyword);

    let promiseObj = new Promise((resolve, reject) => {
        let xHttp = new XMLHttpRequest();
        xHttp.onload = function () {
            if (this.status == 200) {
                resolve(xHttp.responseText);
            } else {
                reject(xHttp.statusText);
            }
        };
        xHttp.open("GET", 'https://api.github.com/search/repositories?q=' + keyword);
        xHttp.send();
    });

    promiseObj.then(value => {
        console.log("OK");
        let obj;
        if (typeof value === "string") {
         obj = JSON.parse(value)
        }
        document.getElementById("display").innerHTML = obj.toString()

        console.log("End");
    }, reason => {
        console.log("NG");
        console.log(reason);
    });

}

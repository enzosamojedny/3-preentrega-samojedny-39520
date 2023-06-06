
const urlIBM = 'https://www.alphavantage.co/query?function=TIME_SERIES_WEEKLY_ADJUSTED&symbol=IBM&apikey=0Y9J544VII9BYP7K';
const urlMSFT = 'https://www.alphavantage.co/query?function=TIME_SERIES_WEEKLY_ADJUSTED&symbol=MSFT&apikey=0Y9J544VII9BYP7K';
const urlGOOGL = 'https://www.alphavantage.co/query?function=TIME_SERIES_WEEKLY_ADJUSTED&symbol=GOOGL&apikey=0Y9J544VII9BYP7K';
const urlNVDA = 'https://www.alphavantage.co/query?function=TIME_SERIES_WEEKLY_ADJUSTED&symbol=NVDA&apikey=0Y9J544VII9BYP7K';
const urlWMT = 'https://www.alphavantage.co/query?function=TIME_SERIES_WEEKLY_ADJUSTED&symbol=WMT&apikey=0Y9J544VII9BYP7K';

import { userData } from './transfer2.js';
import { updatedMoney } from './frontend.js';
const variables = userData()


async function IBM_FUNCTION() {
    try {
        let response = await fetch(urlIBM);
        let ibmAsync = await response.json();
        const timeSeries = ibmAsync['Weekly Adjusted Time Series'];
        const lastDate = Object.keys(timeSeries)[0];
        const lastPrice = timeSeries[lastDate]['5. adjusted close'];
        const sessionIBM = sessionStorage.setItem('ibm-data', lastPrice);
        const IBMID = document.getElementById('IBM-OPEN');
        let IBMp = document.createElement('p');
        IBMp.className = 'IBMp-JS';
        IBMp.textContent = lastPrice || sessionIBM;
        IBMID.appendChild(IBMp);
    } catch (error) {
        console.log(error);
        const IBMID = document.getElementById('IBM-OPEN');
        let IBMp = document.createElement('p');
        IBMp.className = 'IBMp-JS';
        IBMp.textContent = sessionStorage.getItem('ibm-data');
        IBMID.appendChild(IBMp);
    }
}
async function MSFT_FUNCTION() {
    try {
        let response = await fetch(urlMSFT);
        let data = await response.json();
        const timeSeries = data['Weekly Adjusted Time Series'];
        const lastDate = Object.keys(timeSeries)[0];
        const lastPrice = timeSeries[lastDate]['5. adjusted close'];
        const sessionMSFT = sessionStorage.setItem('msft-data', lastPrice);
        const MSFTID = document.getElementById('MSFT-OPEN');
        let MSFTp = document.createElement('p');
        MSFTp.className = 'MSFTp-JS';
        MSFTp.textContent = lastPrice || sessionMSFT;
        MSFTID.appendChild(MSFTp);
    } catch (error) {
        console.log(error);
        const MSFTID = document.getElementById('MSFT-OPEN');
        let MSFTp = document.createElement('p');
        MSFTp.className = 'MSFTp-JS';
        MSFTp.textContent = sessionStorage.getItem('msft-data');
        MSFTID.appendChild(MSFTp);
    }
}
async function GOOGL_FUNCTION() {
    try {
        let response = await fetch(urlGOOGL);
        let data = await response.json();
        const timeSeries = data['Weekly Adjusted Time Series'];
        const lastDate = Object.keys(timeSeries)[0];
        const lastPrice = timeSeries[lastDate]['5. adjusted close'];
        const sessionGOOGL = sessionStorage.setItem('googl-data', lastPrice);
        const GOOGLID = document.getElementById('GOOGL-OPEN');
        let GOOGLp = document.createElement('p');
        GOOGLp.className = 'GOOGLp-JS';
        GOOGLp.textContent = lastPrice || sessionGOOGL;
        GOOGLID.appendChild(GOOGLp);
    } catch (error) {
        console.log(error);
        const GOOGLID = document.getElementById('GOOGL-OPEN');
        let GOOGLp = document.createElement('p');
        GOOGLp.className = 'GOOGLp-JS';
        GOOGLp.textContent = sessionStorage.getItem('googl-data');
        GOOGLID.appendChild(GOOGLp);
    }
}
async function WMT_FUNCTION() {
    try {
        let response = await fetch(urlWMT);
        let data = await response.json();
        const timeSeries = data['Weekly Adjusted Time Series'];
        const lastDate = Object.keys(timeSeries)[0];
        const lastPrice = timeSeries[lastDate]['5. adjusted close'];
        const sessionWMT = sessionStorage.setItem('wmt-data', lastPrice);
        const WMTID = document.getElementById('WMT-OPEN');
        let WMTp = document.createElement('p');
        WMTp.className = 'WMTp-JS';
        WMTp.textContent = lastPrice || sessionWMT;
        WMTID.appendChild(WMTp);
    } catch (error) {
        console.log(error);
        const WMTID = document.getElementById('WMT-OPEN');
        let WMTp = document.createElement('p');
        WMTp.className = 'WMTp-JS';
        WMTp.textContent = sessionStorage.getItem('wmt-data');
        WMTID.appendChild(WMTp);
    }
}
async function NVDA_FUNCTION() {
    try {
        let response = await fetch(urlNVDA);
        let data = await response.json();
        const timeSeries = data['Weekly Adjusted Time Series'];
        const lastDate = Object.keys(timeSeries)[0];
        const lastPrice = timeSeries[lastDate]['5. adjusted close'];
        const sessionNVDA = sessionStorage.setItem('nvda-data', lastPrice);
        const NVDAID = document.getElementById('NVDA-OPEN');
        let NVDAp = document.createElement('p');
        NVDAp.className = 'NVDAp-JS';
        NVDAp.textContent = lastPrice || sessionNVDA;
        NVDAID.appendChild(NVDAp);
    } catch (error) {
        console.log(error);
        const NVDAID = document.getElementById('NVDA-OPEN');
        let NVDAp = document.createElement('p');
        NVDAp.className = 'NVDAp-JS';
        NVDAp.textContent = sessionStorage.getItem('nvda-data');
        NVDAID.appendChild(NVDAp);
    }
}
IBM_FUNCTION()
MSFT_FUNCTION()
GOOGL_FUNCTION()
NVDA_FUNCTION()
WMT_FUNCTION()

const ibm_buy_button = document.getElementById('buy-ibm')
const msft_buy_button = document.getElementById('buy-msft')
const googl_buy_button = document.getElementById('buy-googl')
const nvda_buy_button = document.getElementById('buy-nvda')
const wmt_buy_button = document.getElementById('buy-wmt')
const ibm_sell_button = document.getElementById('sell-ibm')
const msft_sell_button = document.getElementById('sell-msft')
const googl_sell_button = document.getElementById('sell-googl')
const nvda_sell_button = document.getElementById('sell-nvda')
const wmt_sell_button = document.getElementById('sell-wmt')

//i should make an async function with a timeout to wait for the function call which might take
//2 or 3 seconds, in order to avoid getItem() to be null



function ibmBuy() {
    const ibmData = sessionStorage.getItem('ibm-data');
    Swal.fire({
        title: "You are about to buy IBM in $" + ibmData,
        text: "Insert quantity of stock below",
        input: 'text',
        inputAttributes: {
            id: 'ibm-quantity'
        },
        showCancelButton: true,
        closeOnCancel: true
    }).then((result) => {
        if (result.value) {
            let ibmQuantity = document.getElementById('ibm-quantity').value;
            if (isNaN(ibmQuantity) || ibmQuantity === '') {
                Swal.fire({
                    icon: 'error',
                    title: 'Please insert a valid number',
                    text: '',
                })
                return;
            }
            ibmQuantity = parseInt(ibmQuantity);
            if (ibmQuantity < 1) {
                Swal.fire({
                    icon: 'error',
                    title: 'You need to buy at least 1 unit of stock',
                    text: '',
                })
                return;
            }
            let ibmValue = ibmQuantity * ibmData;
            Swal.fire({
                icon: 'success',
                title: ibmQuantity + ' IBM class "A" shares bought in $' + ibmData + ' for a total of $' + ibmValue,
                text: '',
            });
        } else {
            return;
            // Swal.fire({
            //     icon: 'error',
            //     title: 'Insufficient funds in your savings account',
            //     text: '',
            // });
        }
    });
}
ibm_buy_button.addEventListener('click', ibmBuy)

function msftBuy() {
    const msftData = sessionStorage.getItem('msft-data');
    Swal.fire({
        title: "You are about to buy MSFT in $" + msftData,
        text: "Insert quantity of stock below",
        input: 'text',
        inputAttributes: {
            id: 'msft-quantity'
        },
        showCancelButton: true,
        closeOnCancel: true
    }).then((result) => {
        if (result.value) {
            let msftQuantity = document.getElementById('msft-quantity').value;
            if (isNaN(msftQuantity) || msftQuantity === '') {
                Swal.fire({
                    icon: 'error',
                    title: 'Please insert a valid number',
                    text: '',
                })
                return;
            }
            msftQuantity = parseInt(msftQuantity);
            if (msftQuantity < 1) {
                Swal.fire({
                    icon: 'error',
                    title: 'You need to buy at least 1 unit of stock',
                    text: '',
                })
                return;
            }
            let msftValue = msftQuantity * msftData;
            Swal.fire({
                icon: 'success',
                title: msftQuantity + ' MSFT class "A" shares bought in $' + msftData + ' for a total of $' + msftValue,
                text: '',
            });
        } else {
            return;
            // Swal.fire({
            //     icon: 'error',
            //     title: 'Insufficient funds in your savings account',
            //     text: '',
            // });
        }
    });
}
msft_buy_button.addEventListener('click', msftBuy)

function googlBuy() {
    const googlData = sessionStorage.getItem('googl-data');
    Swal.fire({
        title: "You are about to buy GOOGL in $" + googlData,
        text: "Insert quantity of stock below",
        input: 'text',
        inputAttributes: {
            id: 'googl-quantity'
        },
        showCancelButton: true,
        closeOnCancel: true
    }).then((result) => {
        if (result.value) {
            let googlQuantity = document.getElementById('googl-quantity').value;
            if (isNaN(googlQuantity) || googlQuantity === '') {
                Swal.fire({
                    icon: 'error',
                    title: 'Please insert a valid number',
                    text: '',
                })
                return;
            }
            googlQuantity = parseInt(googlQuantity);
            if (googlQuantity < 1) {
                Swal.fire({
                    icon: 'error',
                    title: 'You need to buy at least 1 unit of stock',
                    text: '',
                })
                return;
            }
            let googlValue = googlQuantity * googlData;
            Swal.fire({
                icon: 'success',
                title: googlQuantity + ' GOOGL class "A" shares bought in $' + googlData + ' for a total of $' + googlValue,
                text: '',
            });
        } else {
            return;
            // Swal.fire({
            //     icon: 'error',
            //     title: 'Insufficient funds in your savings account',
            //     text: '',
            // });
        }
    });
}
googl_buy_button.addEventListener('click', googlBuy)

function wmtBuy() {
    const wmtData = sessionStorage.getItem('wmt-data');
    Swal.fire({
        title: "You are about to buy WMT in $" + wmtData,
        text: "Insert quantity of stock below",
        input: 'text',
        inputAttributes: {
            id: 'wmt-quantity'
        },
        showCancelButton: true,
        closeOnCancel: true
    }).then((result) => {
        if (result.value) {
            let wmtQuantity = document.getElementById('wmt-quantity').value;
            if (isNaN(wmtQuantity) || wmtQuantity === '') {
                Swal.fire({
                    icon: 'error',
                    title: 'Please insert a valid number',
                    text: '',
                })
                return;
            }
            wmtQuantity = parseInt(wmtQuantity);
            if (wmtQuantity < 1) {
                Swal.fire({
                    icon: 'error',
                    title: 'You need to buy at least 1 unit of stock',
                    text: '',
                })
                return;
            }
            let wmtValue = wmtQuantity * wmtData;
            Swal.fire({
                icon: 'success',
                title: wmtQuantity + ' WMT class "A" shares bought in $' + wmtData + ' for a total of $' + wmtValue,
                text: '',
            });
        } else {
            return;
            // Swal.fire({
            //     icon: 'error',
            //     title: 'Insufficient funds in your savings account',
            //     text: '',
            // });
        }
    });
}
wmt_buy_button.addEventListener('click', wmtBuy)

function nvdaBuy() {
    const nvdaData = sessionStorage.getItem('nvda-data');
    Swal.fire({
        title: "You are about to buy NVDA in $" + nvdaData,
        text: "Insert quantity of stock below",
        input: 'text',
        inputAttributes: {
            id: 'nvda-quantity'
        },
        showCancelButton: true,
        closeOnCancel: true
    }).then((result) => {
        if (result.value) {
            let nvdaQuantity = document.getElementById('nvda-quantity').value;
            if (isNaN(nvdaQuantity) || nvdaQuantity === '') {
                Swal.fire({
                    icon: 'error',
                    title: 'Please insert a valid number',
                    text: '',
                })
                return;
            }
            nvdaQuantity = parseInt(nvdaQuantity);
            if (nvdaQuantity < 1) {
                Swal.fire({
                    icon: 'error',
                    title: 'You need to buy at least 1 unit of stock',
                    text: '',
                })
                return;
            }
            let nvdaValue = nvdaQuantity * nvdaData;
            Swal.fire({
                icon: 'success',
                title: nvdaQuantity + ' NVDA class "A" shares bought in $' + nvdaData + ' for a total of $' + nvdaValue,
                text: '',
            });
        } else {
            return;
            // Swal.fire({
            //     icon: 'error',
            //     title: 'Insufficient funds in your savings account',
            //     text: '',
            // });
        }
    });
}
nvda_buy_button.addEventListener('click', nvdaBuy)

function ibmSell() {
    const ibmData = sessionStorage.getItem('ibm-data');
    Swal.fire({
        title: "You are about to sell IBM in $" + ibmData,
        text: "Insert quantity of stock below",
        input: 'text',
        inputAttributes: {
            id: 'ibm-quantity'
        },
        showCancelButton: true,
        closeOnCancel: true
    }).then((result) => {
        if (result.value) {
            let ibmQuantity = document.getElementById('ibm-quantity').value;
            if (isNaN(ibmQuantity) || ibmQuantity === '') {
                Swal.fire({
                    icon: 'error',
                    title: 'Please insert a valid number',
                    text: '',
                })
                return;
            }
            ibmQuantity = parseInt(ibmQuantity);
            if (ibmQuantity < 1) {
                Swal.fire({
                    icon: 'error',
                    title: 'You need to buy at least 1 unit of stock',
                    text: '',
                })
                return;
            }
            let ibmValue = ibmQuantity * ibmData;
            Swal.fire({
                icon: 'success',
                title: ibmQuantity + ' IBM class "A" shares sold in $' + ibmData + ' for a total of $' + ibmValue,
                text: '',
            });
        } else {
            return;
            // Swal.fire({
            //     icon: 'error',
            //     title: 'Insufficient funds in your savings account',
            //     text: '',
            // });
        }
    });
}
ibm_sell_button.addEventListener('click', ibmSell)

function msftSell() {
    const msftData = sessionStorage.getItem('msft-data');
    Swal.fire({
        title: "You are about to sell MSFT in $" + msftData,
        text: "Insert quantity of stock below",
        input: 'text',
        inputAttributes: {
            id: 'msft-quantity'
        },
        showCancelButton: true,
        closeOnCancel: true
    }).then((result) => {
        if (result.value) {
            let msftQuantity = document.getElementById('msft-quantity').value;
            if (isNaN(msftQuantity) || msftQuantity === '') {
                Swal.fire({
                    icon: 'error',
                    title: 'Please insert a valid number',
                    text: '',
                })
                return;
            }
            msftQuantity = parseInt(msftQuantity);
            if (msftQuantity < 1) {
                Swal.fire({
                    icon: 'error',
                    title: 'You need to buy at least 1 unit of stock',
                    text: '',
                })
                return;
            }
            let msftValue = msftQuantity * msftData;
            Swal.fire({
                icon: 'success',
                title: msftQuantity + ' MSFT class "A" shares sold in $' + msftData + ' for a total of $' + msftValue,
                text: '',
            });
        } else {
            return;
            // Swal.fire({
            //     icon: 'error',
            //     title: 'Insufficient funds in your savings account',
            //     text: '',
            // });
        }
    });
}
msft_sell_button.addEventListener('click', msftSell)

function googlSell() {
    const googlData = sessionStorage.getItem('googl-data');
    Swal.fire({
        title: "You are about to sell GOOGL in $" + googlData,
        text: "Insert quantity of stock below",
        input: 'text',
        inputAttributes: {
            id: 'googl-quantity'
        },
        showCancelButton: true,
        closeOnCancel: true
    }).then((result) => {
        if (result.value) {
            let googlQuantity = document.getElementById('googl-quantity').value;
            if (isNaN(googlQuantity) || googlQuantity === '') {
                Swal.fire({
                    icon: 'error',
                    title: 'Please insert a valid number',
                    text: '',
                })
                return;
            }
            googlQuantity = parseInt(googlQuantity);
            if (googlQuantity < 1) {
                Swal.fire({
                    icon: 'error',
                    title: 'You need to buy at least 1 unit of stock',
                    text: '',
                })
                return;
            }
            let googlValue = googlQuantity * googlData;
            Swal.fire({
                icon: 'success',
                title: googlQuantity + ' GOOGL class "A" shares sold in $' + googlData + ' for a total of $' + googlValue,
                text: '',
            });
        } else {
            return;
            // Swal.fire({
            //     icon: 'error',
            //     title: 'Insufficient funds in your savings account',
            //     text: '',
            // });
        }
    });
}
googl_sell_button.addEventListener('click', googlSell)

function wmtSell() {
    const wmtData = sessionStorage.getItem('wmt-data');
    Swal.fire({
        title: "You are about to sell WMT in $" + wmtData,
        text: "Insert quantity of stock below",
        input: 'text',
        inputAttributes: {
            id: 'wmt-quantity'
        },
        showCancelButton: true,
        closeOnCancel: true
    }).then((result) => {
        if (result.value) {
            let wmtQuantity = document.getElementById('wmt-quantity').value;
            if (isNaN(wmtQuantity) || wmtQuantity === '') {
                Swal.fire({
                    icon: 'error',
                    title: 'Please insert a valid number',
                    text: '',
                })
                return;
            }
            wmtQuantity = parseInt(wmtQuantity);
            if (wmtQuantity < 1) {
                Swal.fire({
                    icon: 'error',
                    title: 'You need to buy at least 1 unit of stock',
                    text: '',
                })
                return;
            }
            let wmtValue = wmtQuantity * wmtData;
            Swal.fire({
                icon: 'success',
                title: wmtQuantity + ' WMT class "A" shares sold in $' + wmtData + ' for a total of $' + wmtValue,
                text: '',
            });
        } else {
            return;
            // Swal.fire({
            //     icon: 'error',
            //     title: 'Insufficient funds in your savings account',
            //     text: '',
            // });
        }
    });
}
wmt_sell_button.addEventListener('click', wmtSell)

function nvdaSell() {
    const nvdaData = sessionStorage.getItem('nvda-data');
    Swal.fire({
        title: "You are about to sell NVDA in $" + nvdaData,
        text: "Insert quantity of stock below",
        input: 'text',
        inputAttributes: {
            id: 'nvda-quantity'
        },
        showCancelButton: true,
        closeOnCancel: true
    }).then((result) => {
        if (result.value) {
            let nvdaQuantity = document.getElementById('nvda-quantity').value;
            if (isNaN(nvdaQuantity) || nvdaQuantity === '') {
                Swal.fire({
                    icon: 'error',
                    title: 'Please insert a valid number',
                    text: '',
                })
                return;
            }
            nvdaQuantity = parseInt(nvdaQuantity);
            if (nvdaQuantity < 1) {
                Swal.fire({
                    icon: 'error',
                    title: 'You need to buy at least 1 unit of stock',
                    text: '',
                })
                return;
            }
            let nvdaValue = nvdaQuantity * nvdaData;
            Swal.fire({
                icon: 'success',
                title: nvdaQuantity + ' NVDA class "A" shares sold in $' + nvdaData + ' for a total of $' + nvdaValue,
                text: '',
            });
        } else {
            return;
            // Swal.fire({
            //     icon: 'error',
            //     title: 'Insufficient funds in your savings account',
            //     text: '',
            // });
        }
    });
}
nvda_sell_button.addEventListener('click', nvdaSell)

async function showLoading() {
    Swal.fire({
        title: "Retrieving data from our servers",
        text: "Please wait",
        imageUrl: "../images/loading-buffering.gif",
        showConfirmButton: false,
        allowOutsideClick: false,
        imageWidth: 200,
        imageHeight: 170
    });
    setTimeout(() => {
        Swal.fire({
            icon: 'success',
            title: "Data retrieved succesfully! ",
            showConfirmButton: false,
            timer: 3000
        });
    }, 3000);
}
showLoading()
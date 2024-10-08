function gID(id) {
    theElement = document.getElementById(id)
    return theElement
}

let codeForm = gID('code-form')
let finalCode = gID('final-code')

// makes dropbox links work lol
function onTheDL(link) {
    if (link.includes('www.dropbox.com')) {
        link = link.replace('www.', 'dl.')
    }

    return link
}

// add the hsl related function later
function translate(hex, val) {
    let result = /([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)

    let r = parseInt(result[1], 16)
    let g = parseInt(result[2], 16)
    let b = parseInt(result[3], 16)

    r /= 255, g /= 255, b /= 255
    let max = Math.max(r, g, b), min = Math.min(r, g, b)
    let h, s, l = (max + min) / 2

    if (max == min) {
        h = s = 0 // grayscale
    } else {
        let d = max - min
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min)
        switch (max) {
            case r: h = (g - b) / d + (g < b ? 6 : 0); break;
            case g: h = (b - r) / d + 2; break;
            case b: h = (r - g) / d + 4; break;
        }
        h /= 6
    }

    s = s * 100
    s = Math.round(s)
    l = l * 100
    l = l + (val * 5)
    l = Math.round(l)
    h = h * 360
    h = Math.round(h)

    // now convert back into hex
    l /= 100
    let a = s * Math.min(l, 1 - l) / 100
    let f = n => {
        let k = (n + h / 30) % 12
        let color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1)
        return Math.round(255 * color).toString(16).padStart(2, '0')
    }

    return f(0) + f(8) + f(4)
}

// variables section
function variables(fc1, fc2, fc3, fontMain, fontMainType, fontHead, fontHeadType, bgColor, pc1, pc2, pc3, pc4, sc1, sc2, sc3, sc4, tc, bc, redBG, redLink, greenBG, greenLink, yellowBG, yellowLink, event, b1, b2, b3, b4, b5, b6, bText, rb1, rb2, rb3, rb4, rb5, rb6, rbText) {
    const varText = `:root {
    --fc1: #${fc1};
    --fc2: #${fc2};
    --fc3: #${fc3};
    --eventText: #${event};
    --mainFont: '${fontMain}', ${fontMainType};
    --headFont: '${fontHead}', ${fontHeadType};
    --bgColor: #${bgColor}80;
    --pc1: #${pc1};
    --pc2: #${pc2};
    --pc3: #${pc3};
    --pc4: #${pc4};
    --sc1: #${sc1};
    --sc2: #${sc2};
    --sc3: #${sc3};
    --sc4: #${sc4};
    --tc: #${tc};
    --borderColor: #${bc};
    --redAlert: #${redBG};
    --redLink: #${redLink};
    --greenAlert: #${greenBG};
    --greenLink: #${greenLink};
    --yellowAlert: #${yellowBG};
    --yellowLink: #${yellowLink};
    --button1: #${b1};
    --button2: #${b2};
    --button3: #${b3};
    --button4: #${b4};
    --button5: #${b5};
    --button6: #${b6};
    --buttonText: #${bText};
    --redButton1: #${rb1};
    --redButton2: #${rb2};
    --redButton3: #${rb3};
    --redButton4: #${rb4};
    --redButton5: #${rb5};
    --redButton6: #${rb6};
    --redButtonText: #${rbText};
    }`

    return varText
}

// body and starting text
function body(bgColor, bgImage) {
    const bodyText = `body {
    font-family: var(--mainFont);
    background: #${bgColor} url('${bgImage}') fixed;
    background-position-y: center;
    background-position-x: center;
    /* DON'T CHANGE BELOW */
    background-repeat: no-repeat;
    background-size: cover;
    color: var(--fc1);
    }

    /* Headers */
    h1, h2, h3, .sidebar h3 {
    color: var(--fc1);
    font-family: var(--headFont);
    }

    /* Other Text */
    p, b, #fraProfileContent {
    color: var(--fc1);
    }
    small {
    color: var(--fc1) !important;
    }
    /* Links */
    a:link, a:visited, a:active {
    color: var(--fc2);
    }
    a:hover, a:focus {
    color: var(--fc1);
    }`

    return bodyText
}

// topbar
function topbar(border, br, shc) {
    const topbarText = `.topbar a:link, .topbar a:visited, .topbar a:active {
    color: var(--fc2);
    }
    .topbar a:hover, .topbar a:focus {
    color: var(--fc1);
    }
    .topbar {
    background: var(--pc1);
    border: ${(border == 'none') ? border : `1px solid var(--borderColor)`};
    border-top: none;${(br) ? '&#10;border-bottom-left-radius: 10px;&#10;border-bottom-right-radius: 10px;' : ''}
    color: var(--fc1);${(shc != '') ? `&#10;box-shadow: 0 0 10px #${shc};` : ''}
    }`

    return topbarText
}

// navbar
function navbar(border, br, logo) {
    let navbarText = `.navbar {
    background: var(--pc2);
    border-bottom: ${(border == 'none') ? border : `1px solid var(--borderColor)`};${(br) ? '&#10;border-top-right-radius: 10px;&#10;border-top-left-radius: 10px;' : ''}
    font-family: var(--headFont);
    }
    /* logo */
    .navbar-brand img {${(!logo) ? '' : `&#10;content: url(\'${logo}\');`}
    filter: none;
    }
    /* navbar defaults */
    .navbar-default .navbar-nav > .active > a, .navbar-default .navbar-nav > .active > a:hover, .navbar-default .navbar-nav > .active > a:focus, .navbar-default .navbar-collapse, .navbar-default .navbar-form {
    color: var(--fc2);
    }
    .navbar-default .navbar-nav > li > a {
    color: var(--fc2);
    font-weight: bold;
    }
    /* mobile toggle box */
    .navbar-default .navbar-toggle {
    border-color: transparent;
    }
    /* make different from navbar */
    .navbar-default .navbar-toggle:hover,
    .navbar-default .navbar-toggle:focus {
    background: var(--pc3);
    }
    /* bars in navbar icon */
    .navbar-default .navbar-toggle .icon-bar {
    background: var(--fc1);
    }
    /* collapsed navbar */
    .navbar-default .navbar-collapse, .navbar-default .navbar-form {
    border-color: var(--pc1);
    box-shadow: none;
    }
    /* active and hovered links in navbar */
    .navbar-default .navbar-nav > .active > a:hover, .navbar-default .navbar-nav > .active > a:focus, .navbar-default .navbar-nav li a:hover, .navbar-default .navbar-nav li a:focus, .navbar .active a:link, .navbar .active a:visited, .navbar .active a:active, .navbar .active a:focus {
    background: var(--pc3);
    color: var(--fc1);
    }`

    return navbarText
}

// main
function main(border, br, shc) {
    const mainText = `.main {
    background: var(--bgColor);
    border-radius: ${(br) ? '10px' : '0'};
    border: ${(border == 'none') ? border : `1px solid var(--borderColor)`};
    ${(shc != '') ? `box-shadow: 0 0 10px #${shc};` : 'box-shadow: none;'}}
    /* territory box */
    .col-md-9 {
    background: none;
    }`

    return mainText
}

// breadcrumb
function breadcrumb(border, br, shc) {
    const breadcrumbText = `.breadcrumb {
    background: var(--pc3);
    border: ${(border == 'none') ? border : `1px solid var(--borderColor)`};${(br) ? '&#10;border-radius: 10px;' : ''}${(shc != '') ? `&#10;box-shadow: 1px 1px 3px #${shc};` : ''}}
    .breadcrumb::after {
    content: "CSS by Chris (#105465)";
    position: absolute;
    right: 20%;
    z-index: 100;
    color: var(--fc1);
    }
    .breadcrumb-item.active, .breadcrumb-item::before {
    color: var(--fc3) !important;
    }`

    return breadcrumbText
}

// side bar
function sidebar(border, br, shc) {
    const sidebarText = `/* side panel bg */
    .sidebar.col-md-3 {
    background: none;
    }
    /* sidebar inner boxes */
    .col-md-3 .panel {
    border: ${(border == 'none') ? border : `1px solid var(--borderColor)`};${(br) ? '&#10;border-radius: 10px;' : ''}
    background: var(--pc3);
    ${(shc != '') ? `box-shadow: 1px 1px 3px #${shc};` : 'box-shadow: none;'}
    color: var(--fc1);
    }
    /* dotted line above chat on smaller screen sizes */
    .clear {
    border-color: var(--fc1) !important;
    }`

    return sidebarText
}

// progress bars
function progressBar(tCheck) {
    const progressText = `/* background container */
    .progress {
    background: ${(tCheck) ? 'var(--pc2)' : '#fff'};
    /* border-radius: 20px; */
    /* border: 1px solid var(--pc1) */
    }
    /* default and impression */
    .progress-bar {
    background: var(--tc);
    }
    /* if you want all to match comment out the next three classes */
    /* exp, hunger, energy, and thirst respectively */
    /* .progress-bar-success {
    background: #ffc680;
    }
    .progress-bar-danger {
    background: #ffba66;
    }
    .progress-bar-warning {
    background: #ffaf4d;
    }
    .progress-bar-info {
    background: #ffaf4d;
    } */
   /* text inside the progress bars */
    .progress div {
    color: ${(tCheck) ? '#fff' : '#000'};
    font-family: var(--mainFont);
    }`

    return progressText
}

// alerts
function alertBars(border, br, shc) {
    const alertText = `/* all */
    .alert-danger, .alert-success, .alert-warning, .alert {
    color: var(--fc1);
    background: var(--greenAlert);
    border: ${(border == 'none') ? border : `1px solid var(--borderColor)`};${(br) ? '&#10;border-radius: 10px;' : ''}${(shc != '') ? `&#10;box-shadow: 1px 1px 3px #${shc};` : ''}
    }
    /* red notifications */
    .alert-danger {
    color: var(--fc1);
    background: var(--redAlert);
    }
    .alert-danger > a, .alert-danger > a:link, .alert-danger > a:active, .alert-danger > a:visited {
    color: var(--redLink);
    }
    .alert-danger > a:hover, .alert-danger > a:focus, .alert-danger b {
    color: var(--fc1);
    }
    /* green notifications */
    .alert-success {
    color: var(--fc1);
    background: var(--greenAlert);
    }
    .alert-success > a, .alert-success > a:link, .alert-success > a:active, .alert-success > a:visited {
    color: var(--greenLink);
    }
    .alert-success > a:hover, .alert-success > a:focus, .alert-success b {
    color: var(--fc1);
    }
    /* yellow notifications */
    .alert-warning {
    color: var(--fc1);
    background: var(--yellowAlert);
    }
    .alert-warning > a, .alert-warning > a:link, .alert-warning > a:active, .alert-warning > a:visited {
    color: var(--yellowLink);
    }
    .alert-warning > a:hover, .alert-warning > a:focus, .alert-warning b {
    color: var(--fc1);
    }`

    return alertText
}

// html boxes
function htmlBox(border, br, boxType, popUp, plainBox, shc) {
    if (boxType == '3' || !plainBox) {
        // get rid of attempts to add a plain box if they selected the khoshekh boxes or if not selected
        plainBox = ''
    } else {
        plainBox = `.plainBox {
        background: var(--pc3);
        color: var(--fc1);
        border: ${(border == 'none') ? border : `1px solid var(--borderColor)`};
        border-radius: ${(br) ? '10px' : '3px'};
        width: 90%;
        margin: 0 auto;
        padding: 20px;
        height: auto;
        overflow: auto;${(shc != '') ? `&#10;box-shadow: 1px 1px 3px #${shc};` : ''}
        }
        .plainBox h1, .plainBox h2, .plainBox h3 {
        margin: 0;
        color: var(--fc1);
        }`
    }
    if (popUp) {
        popUp = `.profileTab {
        background: var(--pc3);
        color: var(--fc1);
        border: ${(border == 'none') ? border : `1px solid var(--borderColor)`};
        border-bottom: none;
        padding: 15px;
        position: fixed;
        left: 5px;
        bottom: 0;
        height: 50px;
        width: 250px;
        border-top-right-radius: ${(br) ? '10px' : '3px'};
        border-top-left-radius: ${(br) ? '10px' : '3px'};
        transition: 2s;
        z-index: 100;
        overflow: scroll;${(shc != '') ? `&#10;box-shadow: 0 0 10px #${shc};` : ''}
        }
        .profileTab:hover, .profileTab:focus {
        height: 300px;
        }
        .profileTab h1, .profileTab h2, .profileTab h3 {
        margin: 0;
        color: var(--fc1);
        }
        .profileTab::-webkit-scrollbar {
        width: 0;
        height: 0;
        }`
    } else {
        // set to nothing for ease of use
        popUp = ''
    }
    if (boxType == 'none') {
        boxType = ''
    } else if (boxType == '1') {
        // hover box
        boxType = `.bigBox {
        background: var(--pc3);
        color: var(--fc1);
        border: ${(border == 'none') ? border : `1px solid var(--borderColor)`};
        border-radius: ${(br) ? '10px' : '3px'};
        padding: 30px;
        margin: 20px;
        margin-bottom: 0;
        height: 80px;
        overflow: auto;
        transition: 2s;${(shc != '') ? `&#10;box-shadow: 1px 1px 3px #${shc};` : ''}
        }
        .bigBox:hover, .scrollBox:hover {
        height: 300px;
        }
        .bigBox h1, .bigBox h2, .bigBox h3, .scrollBox h1, .scrollBox h2, .scrollBox h3 {
        margin: 0;
        color: var(--fc1);
        }
        /* scrollbars */
        .bigBox::-webkit-scrollbar, .scrollBox::-webkit-scrollbar {
        width: 0;
        height: 0;
        }
        /* section holding small boxes */
        .scrollSection {
        display: flex;
        justify-content: center;
        }
        /* small box */
        .scrollBox {
        background: var(--pc3);
        color: var(--fc1);
        border: ${(border == 'none') ? border : `1px solid var(--borderColor)`};
        border-radius: ${(br) ? '10px' : '3px'};
        padding: 20px;
        height: 60px;
        width: 450px;
        margin: 20px;
        margin-bottom: 0;
        overflow: auto;
        float: left;
        transition: 2s;${(shc != '') ? `&#10;box-shadow: 1px 1px 3px #${shc};` : ''}
        }`
    } else if (boxType == '2') {
        // side boxes
        boxType = `.bigBox {
        background: var(--pc3);
        color: var(--fc1);
        border: ${(border == 'none') ? border : `1px solid var(--borderColor)`};
        overflow: scroll;
        height: 320px;
        width: 46%;
        padding: 20px;
        float: left;
        margin: 10px;
        margin-bottom: 20px;
        border-radius: ${(br) ? '10px' : '3px'};
        text-align: left;${(shc != '') ? `&#10;box-shadow: 1px 1px 3px #${shc};` : ''}
        }
        .scrollBox {
        background: var(--pc3);
        color: var(--fc1);
        border: ${(border == 'none') ? border : `1px solid var(--borderColor)`};
        overflow: scroll;
        height: 150px;
        width: 46%;
        padding: 20px;
        float: right;
        margin: 10px;
        border-radius: ${(br) ? '10px' : '3px'};
        text-align: left;${(shc != '') ? `&#10;box-shadow: 1px 1px 3px #${shc};` : ''}
        }
        .scrollSection {
        margin: 0 auto;
        width: 90%;
        height: 350px;
        }
        .bigBox::-webkit-scrollbar, .scrollBox::-webkit-scrollbar {
        width: 0;
        height: 0;
        }
        .bigBox h1, .bigBox h2, .bigBox h3, .scrollBox h1, .scrollBox h2, .scrollBox h3 {
        margin: 0;
        color: var(--fc1);
        }`
    } else {
        // khoshekh boxes
        boxType = `.bigBox {
        background: var(--pc3);
        border-radius: ${(br) ? '10px' : '3px'};
        border: ${(border == 'none') ? border : `1px solid var(--borderColor)`};
        color: var(--fc1);
        overflow: scroll;
        height: 200px;
        width: 57%;
        padding: 20px;
        float: left;
        margin: 10px;
        margin-bottom: 20px;
        text-align: left;${(shc != '') ? `&#10;box-shadow: 1px 1px 3px #${shc};` : ''}
        }
        .scrollBox {
        background: var(--pc3);
        color: var(--fc1);
        overflow: scroll;
        border-radius: ${(br) ? '10px' : '3px'};
        border: ${(border == 'none') ? border : `1px solid var(--borderColor)`};
        height: 200px;
        width: 37%;
        padding: 20px;
        float: right;
        margin: 10px;
        text-align: left;${(shc != '') ? `&#10;box-shadow: 1px 1px 3px #${shc};` : ''}
        }
        .scrollSection {
        margin: 0 auto;
        width: 100%;
        height: 230px;
        }
        @media (max-width: 715px) {
        .bigBox {
        width: 56%;
        }
        .scrollBox {
        width: 36%;
        }
        }
        .plainBox {
        background: var(--pc3);
        color: var(--fc1);
        border-radius: ${(br) ? '10px' : '3px'};
        border: ${(border == 'none') ? border : `1px solid var(--borderColor)`};
        margin: 0 10px 0 10px;
        padding: 20px;
        height: 150px;
        overflow: scroll;${(shc != '') ? `&#10;box-shadow: 1px 1px 3px #${shc};` : ''}
        }
        .bigBox::-webkit-scrollbar, .scrollBox::-webkit-scrollbar, .plainBox::-webkit-scrollbar {
        width: 0;
        height: 0;
        }
        .bigBox h1, .bigBox h2, .bigBox h3, .scrollBox h1, .scrollBox h2, .scrollBox h3, .plainBox h1, .plainBox h2, .plainBox h3 {
        margin: 0;
        color: var(--fc1);
        }`
    }
    const htmlText = `${boxType}${(popUp == '') ? '' : `&#10;&#10;${popUp}`}${(plainBox == '') ? '' : `&#10;&#10;${plainBox}`}`

    return htmlText
}

// comment box
function comments(border, shc) {
    const commentText = `#commentBox {
    border: ${(border == 'none') ? border : `1px solid var(--borderColor)`} !important;
    border-radius: 5px !important;
    height: 200px !important;
    background: var(--pc4);${(shc != '') ? `&#10;box-shadow: 1px 1px 3px #${shc};` : ''}
    }
    .comment:nth-child(even) {
    background: var(--pc3) !important;
    }
    /* scrollbar */
    #commentBox::-webkit-scrollbar{
    height: 0;
    width: 8px;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    background: #fff;
    }
    /* scrollbar button */
    #commentBox::-webkit-scrollbar-thumb {
    background: var(--pc2);
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    }
    #commentBox::-webkit-scrollbar-thumb:hover {
    background: var(--pc1);
    }`

    return commentText
}

// tables
function tables(fc1, border, tbr, kingHov, kingStyle, kingHovStyle, shc) {
    if (kingStyle == 'circle') {
        kingStyle = '100px'
    } else if (kingStyle == 'rounded') {
        kingStyle = '10px'
    } else {
        kingStyle = '0'
    }
    if (kingHovStyle == 'rounded') {
        kingHovStyle = '10px'
    } else {
        kingHovStyle = '0'
    }
    const tableText = `/* table headers */
    .table .top, .table th {
    background: var(--sc1);
    color: var(--fc1);
    font-family: var(--headFont);
    font-weight: bold;${(tbr) ? '&#10;border-top-right-radius: 10px;&#10;border-top-left-radius: 10px;' : ''}
    }
    /* lion title and name */
    .xlarge.b {
    font-weight: bold;
    }
    /* lion image */
    #lion_image > div {${(kingHov) ? '&#10;transition: 1s;' : ''}
    border-radius: ${kingStyle};
    border: ${(border == 'none') ? border : `1px solid var(--borderColor)`};
    }${(kingHov) ? `&#10;a:hover > #lion_image > div, a:focus > #lion_image > div {&#10;border-radius: ${kingHovStyle};&#10;}&#10;` : ''}
    /* table body */
    .table {
    background: var(--sc4);
    border: ${(border == 'none') ? border : `1px solid var(--borderColor)`};
    color: var(--fc1);${(tbr) ? `&#10;border-collapse: separate;&#10;border-radius: 10px;` : ''}${(shc != '') ? `&#10;box-shadow: 1px 1px 3px #${shc};` : ''}
    }
    /* table links */
    .table .top a:link, .table .top a:active, .table .top a:visited, .table th a:link, .table th a:active, .table th a:visited {
    color: var(--fc2);
    font-weight: bold;
    border-bottom: none;
    }
    .table .top a:hover, .table th a:hover, .table .top a:focus, .table th a:focus {
    color: var(--fc1);
    font-weight: bold;
    }
    /* left side of stats on king and status bars in caves */
    .table .left {
    background: var(--sc2);
    }&#10;` +
        `/* left side of stats on king */
        .inner-table .left {
        border-top-left-radius: 5px;
        border-bottom-left-radius: 5px;
        }
        /* right side of king stats */
        .inner-table .right {
        border-top-right-radius: 5px;
        border-bottom-right-radius: 5px;
        background: var(--sc3);
        }
        /* every other lion in caves */
        .table .right_odd {
        background: var(--sc3);
        }
        /* table footers */
        .table .innerHeader, .table .bottom, #player > tbody > tr {
        background: var(--sc1);
        color: var(--fc1);${(tbr) ? `&#10;border-bottom-left-radius: 10px;&#10;border-bottom-right-radius: 10px;` : ''}
        }
        /* player table footer adjustments for rounded corners */
        #player .right_odd {
        background: none;${(tbr) ? `&#10;border-bottom-right-radius: 10px;` : ''}
        }${(tbr) ? `&#10;#player .right_odd:first-child {&#10;border-bottom-left-radius: 10px;&#10;border-bottom-right-radius: 0;&#10;}` : ''}
        #player tr.right {
        background: none;
        }
        /* quick link to mutated lions under king panel */
        .table .bottom a:link, .table .bottom a:visited, .table .bottom a:active {
        color: var(--fc2);
        text-decoration: none;
        }
        .table .bottom a:hover, .table .bottom a:focus {
        color: var(--fc1);
        text-decoration: underline;
        }
        /* hr in player table */
        #player hr {
        border-color: transparent;
        margin: 0;
        margin-top: 1em;
        }
        /* little :|: spans in player table */
        #player .text-muted {
        color: #${fc1}80;
        }
        /* days left until heat badge */
        .badge {
        background: var(--tc);
        color: var(--fc1);
        border: ${(border == 'none') ? border : `1px solid var(--borderColor)`};
        }
        /* inputs for typing in text in territory description etc. */
        textarea, input, select, #fra_chatContainer #txtChatInput {
        color: #000000;
        background: #ffffff;
        border: 1px solid var(--sc1);
        }
        input::placeholder {
        color: #00000080;
        }${(tbr) ? `&#10;form .table, form .table th, form .table .bottom, .table.auto, .table.auto .top, .table.auto th, .table.auto .bottom {&#10;border-radius: 0 !important;&#10;}&#10;#pride tr:last-child td:last-child {&#10;border-radius: 0 0 10px 0;&#10;}&#10;#pride tr:last-child td:first-child {&#10;border-radius: 0 0 0 10px;&#10;}&#10;#sparring .right_odd {&#10;border-bottom-right-radius: 10px;&#10;}` : ''}`

    return tableText
}

// clan bits
function clanDesc(border, shc) {
    const clanText = `.page-description {
    border: ${(border == 'none') ? border : `1px solid var(--borderColor)`};
    background: var(--pc4);
    padding: 20px;${(shc != '') ? `&#10;box-shadow: 1px 1px 3px #${shc};` : ''}
    }
    .page-description > div {
    padding: 0;
    margin: 0;
    }`

    return clanText
}

// caves
function caves(border, br, cave, pride, mound, shc) {
    const caveText = `/* main overrides */
    .mound-grid, .cave-grid {
    background: var(--tc);
    border: ${(border == 'none') ? border : `1px solid var(--borderColor)`};${(br) ? `&#10;border-radius: 10px;` : ''}
    color: var(--fc2);${(shc != '') ? `&#10;box-shadow: 1px 1px 3px #${shc};` : ''}
    }
    /* cave and mound link hover */
    .center > a:hover > .cave-grid, .center > a:focus > .cave-grid, .center > a:hover > .mound-grid, .center > a:focus > .mound-grid {
    color: var(--fc1);
    }
    /* cave and mound customization */
    /* all caves */
    .cave-grid > img {
    content: url('${cave}');
    height: 120px;
    object-fit: cover;
    object-position: top;
    }
    /* pride tabs */
    ${(pride != cave) ? `img[src$='//static.lioden.com/images/layout/unsortedlionsbanner.png'], img[src$='//static.lioden.com/images/layout/nestingbanner.png'], img[src$='//static.lioden.com/images/layout/prideoverviewbanner.png'] {&#10;content: url('${pride}');&#10;height: 80px;&#10;object-fit: cover;&#10;object-position: top;&#10;}` : `/* img[src$='//static.lioden.com/images/layout/unsortedlionsbanner.png'], img[src$='//static.lioden.com/images/layout/nestingbanner.png'], img[src$='//static.lioden.com/images/layout/prideoverviewbanner.png'] {&#10;content: url('${pride}');&#10;height: 80px;&#10;object-fit: cover;&#10;object-position: top;&#10;} */`}
    /* unsorted lions */
    /* img[src$='//static.lioden.com/images/layout/unsortedlionsbanner.png'] {
    content: url('LINK');
    object-position: top;
    } */
    /* pregnant lionesses */
    /* img[src$='//static.lioden.com/images/layout/nestingbanner.png'] {
    content: url('LINK');
    object-position: top;
    } */
    /* pride overview */
    /* img[src$='//static.lioden.com/images/layout/prideoverviewbanner.png'] {
    content: url('LINK');
    object-position: top;
    } */
    /* all mounds */
    /* .mound-grid img {
    content: url('LINK');
    padding: 5px;
    } */
    /* all mounds but like a cave */
    .mound-grid {
    padding: 0 0 5px 0;
    }
    .mound-grid img {
    content: url('${mound}');
    height: 100px;
    width: 100%;
    object-fit: cover;
    object-position: center;
    }
    /* create mound image and empty cave slots */
    img[src$='//static.lioden.com/images/layout/addbeetlemound.png'], img[src$='//static.lioden.com/images/layout/caveunused.jpg'] {
    filter: saturate(50%);
    }`

    return caveText
}

// featured lion
function featuredLion(border, br, fLion, shc) {
    if (border != 'none') {
        // box-shadow: 0 0 0 1px #aba5c0;
        border = `0 0 0 1px var(--borderColor)`
    }
    if (shc != '' && border != 'none') {
        border += `, 1px 1px 3px #${shc}`
    } else if (shc != '') {
        border = `1px 1px 3px #${shc}`
    }
    const featuredLionText = `.featured-lion {
    background: var(--sc1);
    color: var(--fc1);
    margin-bottom: 20px;${(br) ? '&#10;border-radius: 10px;' : ''}${(border != 'none') ? `&#10;box-shadow: ${border};&#10;` : ''}
    }${(br) ? '&#10;.featured-lion img {&#10;border-top-right-radius: 10px;&#10;border-top-left-radius: 10px;&#10;}&#10;' : ''}${(fLion != '') ? `&#10;/* featured lion background image */&#10;.featured-lion img[src$='//static.lioden.com/images/cave/default.png'] {&#10;content: url('${fLion}') !important;&#10;/* filter: none; */&#10;}` : ''}
    /* very important if you want it to not look ugly anymore lol don't change the padding here or the media queries at the bottom */
    .featured-lion .b {
    padding-top: 8px;
    }
    .featured-lion a:hover, .featured-lion a:focus {
    color: var(--fc1);
    }
    .featured-lion a:link, .featured-lion a:active, .featured-lion a:visited {
    color: var(--fc2);
    }
    /* owned by text */
    h1.center > small, h1.center > small a:hover, h1.center > small a:focus {
    color: var(--fc1) !important;
    }
    h1.center > small a, h1.center > small a:link, h1.center > small a:visited, h1.center > small a:active {
    color: var(--fc2) !important;
    }
    /* dropdown text */
    .table .bottom select {
    color: #000;
    }`

    return featuredLionText
}

// inner mounds
function mounds(border, br, shc) {
    const moundText = `/* menu bg */
    .sub_menu {
    background: var(--sc1);
    border: ${(border == 'none') ? border : `1px solid var(--borderColor)`};${(br) ? '&#10;border-radius: 10px;' : ''}${(shc != '') ? `&#10;box-shadow: 1px 1px 3px #${shc};` : ''}
    }
    .sub_sub_menu {
    display: none;
    }`

    return moundText
}

// feature styling
function featureStyle(border, br, shc) {
    const featureText = `div.feature {${(br) ? '&#10;border-radius: 10px;' : ''}
    border: ${(border == 'none') ? border : `1px solid var(--borderColor)`};
    background: var(--sc4);
    padding: 20px;
    padding-top: 10px;
    padding-bottom: 10px;${(shc != '') ? `&#10;box-shadow: 1px 1px 3px #${shc};` : ''}
    }
    /* dropdown width (acts funny on smaller screens at the default 200px sometimes) */
    div.feature select {
    width: 180px !important;
    }
    /* header */
    div.feature h3 {
    color: var(--fc1);
    }
    .feature-footer {
    background: var(--sc4);
    }
    /* inner text */
    .feature .xsmall {
    color: var(--fc1);
    }`

    return featureText
}

// dynasty pills
function dynasties(border, br, dynasty, shc) {
    const dynastyText = `/* dynasty main */
    div.left {
    background: var(--tc);${(br) ? '&#10;border-radius: 10px;' : ''}
    border: ${(border == 'none') ? border : `1px solid var(--borderColor)`};
    color: var(--fc1);${(shc != '') ? `&#10;box-shadow: 1px 1px 3px #${shc};` : ''}
    }
    /* custom dynasty images */
    div.left img {
    content: url('${dynasty}');
    object-fit: cover;
    object-position: center;
    padding: 0;
    height: 60px;
    max-width: 500px !important;
    border-bottom-left-radius: inherit;
    border-bottom-right-radius: inherit;
    }
    .dynastylist .left {
    padding: 5px 0 0 0;
    }
    /* dynasty headers */
    .dynastylist h3 {
    color: var(--fc2);
    padding-top: 5px;
    }
    .dynastylist h3:hover, .dynastylist h3:focus {
    color: var(--fc1);
    }
    /* links in the pills beneath dynasty stuff */
    a div.left {
    color: var(--fc2);
    }
    a div.left:hover, a div.left:focus {
    color: var(--fc1);
    }`

    return dynastyText
}

// branch
function branch(border) {
    const branchText = `.item {
    background: var(--sc3);
    border: ${(border == 'none') ? border : `1px solid var(--borderColor)`};
    border-radius: 5px;
    }
    .item-header {
    background: var(--sc2);
    color: var(--fc1);
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    }
    .item-footer {
    background: var(--sc2);
    color: var(--fc1);
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    }`

    return branchText
}

// buttons
function buttons(br, bTextShade, rbTextShade) {
    const buttonText = `/* all */
    .select-control, button.button, input[type="button"], input[type="submit"], input[type="reset"], .select-control:hover, button.button:hover, input[type="button"]:hover, input[type="submit"]:hover, input[type="reset"]:hover, .select-control.bad, button.button.bad, input[type="button"].bad, input[type="submit"].bad, input[type="reset"].bad, .select-control.bad:hover, button.button.bad:hover, input[type="button"].bad:hover, input[type="submit"].bad:hover, input[type="reset"].bad:hover {
        border-radius: ${(br) ? '5px' : '3px'};
        }
        /* regular button */
        .select-control, button.button, input[type="button"], input[type="submit"], input[type="reset"] {
        background: var(--button6);
        background: linear-gradient(to bottom, var(--button6) 5%,var(--button4) 5%,var(--button4) 95%,var(--button2) 95%);
        color: var(--buttonText);
        border: 1px solid var(--button2);
        text-shadow: 1px 1px 0px ${(bTextShade) ? 'var(--button2)' : 'var(--button6)'};
        font-family: var(--mainFont);
        }
        /* regular button hover */
        .select-control:hover, button.button:hover, input[type="button"]:hover, input[type="submit"]:hover, input[type="reset"]:hover {
        background: var(--button5);
        background: linear-gradient(to bottom,  var(--button5) 5%,var(--button3) 5%,var(--button3) 95%,var(--button1) 95%);
        color: var(--buttonText);
        border: 1px solid var(--button1);
        text-shadow: 1px 1px 0px ${(bTextShade) ? 'var(--button1)' : 'var(--button5)'};
        }
        /* red button */
        .select-control.bad, button.button.bad, input[type="button"].bad, input[type="submit"].bad, input[type="reset"].bad {
        background: var(--redButton6);
        background: linear-gradient(to bottom,  var(--redButton6) 5%,var(--redButton4) 5%,var(--redButton4) 49%,var(--redButton4) 95%,var(--redButton2) 95%);
        color: var(--redButtonText);
        border: 1px solid var(--redButton2);
        text-shadow: 1px 1px 0px ${(rbTextShade) ? 'var(--redButton2)' : 'var(--redButton6)'};
        }
        /* red button hover */
        .select-control.bad:hover, button.button.bad:hover, input[type="button"].bad:hover, input[type="submit"].bad:hover, input[type="reset"].bad:hover {
        background: var(--redButton5);
        background: linear-gradient(to bottom,  var(--redButton5) 5%,var(--redButton3) 5%,var(--redButton3) 49%,var(--redButton3) 95%,var(--redButton1) 95%);
        color: var(--redButtonText);
        border: 1px solid var(--redButton1);
        text-shadow: 1px 1px 0px ${(rbTextShade) ? 'var(--redButton1)' : 'var(--redButton5)'};
        }`

    return buttonText
}

// event flavor text
function eventFlavor() {
    const eventText = `/* has to go at the bottom since it likes to be mean to me otherwise trust me best left here lol */
    center > div.center.b, center > b > span {
    color: var(--eventText) !important;
    }`

    return eventText
}

// footer
function footer(tCheck) {
    const footerText = `/* technically applies to all "white" text on the site but mainly applies to the footer text */
    .white {
    color: var(--fc1);${(tCheck) ? '&#10;text-shadow: 0 0 5px #000;' : ''}
    }
    /* bottom links container size to prevent weird stacking issues */
    ul.bottomlinks {
    width: max-content !important;
    }
    /* bottoms links */
    .bottomlinks li a, .bottomlinks li a:link, .bottomlinks li a:active, .bottomlinks li a:visited, .footer a, .footer a:link, .footer a:active, .footer a:visited {
    color: var(--fc2);
    border-bottom: none;
    }
    .bottomlinks li a:hover, .bottomlinks li a:focus, .footer a:hover, footer a:focus {
    color: var(--fc1);
    }`

    return footerText
}

// chat
function chat(tCheck, border) {
    const chatText = `/* main container */
    #chatMessageContainer {
    border: ${(border == 'none') ? border : `1px solid var(--borderColor)`};
    }
    /* chat buttons */
    #btnChatSettings, #btnLoadNewMessages, .s-chat-message_menu {
    filter: grayscale() brightness(${(tCheck) ? '500' : '0'}%);
    }
    /* menu dropbox */
    .channelMenu > button, .channelMenu > div {
    background: var(--pc1) !important;
    border-color: ${(border == 'none') ? 'transparent' : `var(--borderColor)`} !important;
    color: var(--fc2) !important;
    box-shadow: none !important;
    }
    /* message text */
    .s-chat-message {
    color: var(--fc1);
    }
    /* even messages */
    .s-chat-message:nth-child(even) {
    background: var(--pc4);
    }
    /* odd messages */
    .s-chat-message:nth-child(odd) {
    background: var(--pc3);
    }
    /* mention */
    #chatMessageList[data-pings="enabled"] .s-chat-message_mention, .s-chat-message.hasContext {
    background: var(--sc4) !important;
    border-color: var(--sc1) !important;
    color: var(--fc1) !important;
    padding-left: 10px;
    }
    .s-chat-message.hasContext .s-chat-message_timestamp, .s-chat-message_mention.s-chat-message_timestamp {
    padding-left: 10px;
    }
    #chatMessageList[data-pings="enabled"] .s-chat-message_mention a {
    color: var(--fc2) !important;
    }
    #chatMessageList[data-pings="enabled"] .s-chat-message_mention a:hover, #chatMessageList[data-pings="enabled"] .s-chat-message_mention a:focus {
    color: var(--fc1) !important;
    }
    /* scrollbar */
    #chatMessageList::-webkit-scrollbar {
    width: 8px;
    background: #fff;
    }
    /* scrollbar button */
    #chatMessageList::-webkit-scrollbar-thumb {
    background: var(--pc2);
    border-radius: 0;
    }
    #chatMessageList::-webkit-scrollbar-thumb:hover {
    background: var(--pc1);
    }
    /* claim badge */
    .s-chat-message_claim {
    background: var(--pc2);
    border-bottom: none;
    color: var(--fc1);
    }&#10;` +
        `/* claim popout box stuff */
        #modalClaimBG {
        background: rgba(0, 0, 0, 0.5);
        }
        /* main inner bit */
        #modalClaimList {
        background: var(--pc4);
        color: var(--fc1);
        border: ${(border == 'none') ? border : `1px solid var(--borderColor)`};
        }
        #modalClaimList a, #modalClaimList a:active, #modalClaimList a:visited, #modalClaimList a:link {
        color: var(--fc2);
        }
        #modalClaimList a:hover, #modalClaimList a:focus {
        color: var(--fc1);
        }
        /* header */
        #modalClaimList h3 {
        background: var(--pc2);
        color: var(--fc1);
        }
        /* close button */
        #modalClaimList button.close {
        color: var(--fc1);
        }
        /* pinned message */
        #chatMessagePinned, #chatMessagePinned.s-chat-message__pinned {
        background: var(--pc1);
        color: var(--fc1) !important;
        border: none !important;
        }
        .s-chat-sidebar #chatMessagePinned.s-chat-message__pinned {
        text-indent: 4px;
        }
        /* timestamp */
        .s-chat-message_timestamp {
        color: var(--fc1);
        }
        /* mod message text (best left at #000) */
        .s-chat-message__mod, .s-chat-message__mod .s-chat-message_content, .s-chat-message__mod .s-chat-message_timestamp {
        color: #000;
        }
        #fra_chatContainer .channelMenu .channelSwitcher {
        color: var(--fc1);
        }
        #fra_chatContainer .channelMenu .channelSwitcher:hover, #fra_chatContainer .channelMenu .channelSwitcher:focus {
        background: var(--pc2);
        color: var(--fc1);
        }
        #fra_chatContainer .channelMenu .channelSwitcher.active {
        background: var(--pc3);
        color: var(--fc1);
        }
        /* settings text (DO NOT CHANGE OR IT WILL BREAK) */
        #fra_chatContainer label {
        color: #000;
        }
        /* char count */
        #lblCharacterCounter {
        color: var(--fc1) !important;
        }
        /* code of conduct & chat room link */
        a[href$='./code.php'], a[href$='./chat.php'] {
        color: var(--fc1);
        }`

    return chatText
}

// media queries
function media(bgColor, mImg, boxType) {
    const mediaText = `@media (max-width: 993px) {
    .dynastylist {
    margin-bottom: 15px;
    }
    }
    @media (max-width: 768px) {
    body {${(mImg != '') ? `&#10;background: #${bgColor} url('${mImg}') fixed;` : ''}
    background-position-y: center;
    background-position-x: center;
    /* DON'T CHANGE BELOW */
    background-repeat: no-repeat;
    background-size: cover;
    width: auto !important;
    min-width: 600px;
    }
    .main, .topbar {
    box-shadow: none !important;
    }
    #fraProfileContent.hidden-xs {
    display: block !important;
    }
    .breadcrumb::after {
    right: 22% !important;
    }${(boxType == '1') ? `&#10;.bigBox {&#10;height: 150px !important;&#10;}&#10;.scrollBox {&#10;height: 150px !important;&#10;}&#10;.bigBox:hover, .scrollBox:hover {&#10;height: 150px !important;&#10;}` : ''}
    }
    @media (max-width: 684px) {
    div.lionImage.featured-lion > div {
    height: 475px !important;
    }
    }
    @media (max-width: 620px) {
    div.lionImage.featured-lion > div {
    height: 450px !important;
    }
    }`

    return mediaText
}

codeForm.addEventListener('submit', (e) => {
    e.preventDefault()

    // font import link
    let font = gID('font-face').value

    // font colors
    let textCheck = gID('text-check').checked
    let fontPrimary = gID('font-primary').value
    let fontSecondary = gID('font-secondary').value
    let fontTertiary = gID('font-tertiary').value

    // font families
    let fontMain = gID('font-main').value
    let fontHead = gID('font-head').value
    let fontMainType = gID('font-main-fall').value
    let fontHeadType = gID('font-head-fall').value
    if (fontHead == '') {
        fontHead = fontMain
        fontHeadType = fontMainType
    }
    if (fontMainType == 'serif') {
        fontMainType = '\'Times New Roman\', Times, serif'
    } else if (fontMainType == 'sans') {
        fontMainType = 'Verdana, \'Geneva\', Tahoma, sans-serif'
    } else {
        fontMainType = '\'Courier New\', Courier, monospace'
    }
    if (fontHeadType == 'serif') {
        fontHeadType = '\'Times New Roman\', Times, serif'
    } else if (fontHeadType == 'sans') {
        fontHeadType = 'Verdana, \'Geneva\', Tahoma, sans-serif'
    } else {
        fontHeadType = '\'Courier New\', Courier, monospace'
    }

    // bg info
    let bgColor = gID('bg-color').value
    let bgImg = gID('desktop-bg').value
    bgImg = onTheDL(bgImg)
    // mobile image will be dealt with in media queries
    let mobileImg = gID('mobile-bg').value
    mobileImg = onTheDL(mobileImg)

    // main colors
    let primaryOne = gID('primary-one').value
    let primaryTwo = ''
    let primaryThree = ''
    let primaryFour = ''
    if (primaryOne != '') {
        primaryTwo = translate(primaryOne, 1)
        primaryThree = translate(primaryOne, 2)
        primaryFour = translate(primaryOne, 3)
    }

    let secondaryOne = gID('secondary-one').value
    if (secondaryOne == '') {
        secondaryOne = primaryOne
    }
    let secondaryTwo = ''
    let secondaryThree = ''
    let secondaryFour = ''
    if (secondaryOne != '') {
        secondaryTwo = translate(secondaryOne, 1)
        secondaryThree = translate(secondaryOne, 2)
        secondaryFour = translate(secondaryOne, 3)
    }

    let tertiary = gID('tertiary').value

    // border info
    let borderRound = gID('border-check').checked
    let borderColor = gID('border-color').value
    let border = ''
    if (borderColor == '') {
        border = 'none'
    }

    // tables
    let tableBorder = gID('table-check').checked
    let kingImgHover = gID('king-hover-check').checked
    let kingImgStyle = gID('king-img-style').value
    let kingImgHoverStyle = gID('king-img-hover-style').value

    // html boxes
    let htmlBox = gID('html-box').value
    let popUp = gID('popup-check').checked
    let plainBox = gID('box-check').checked

    // alert data
    let redBG = gID('red-alert-bg').value
    let redLink = gID('red-alert-link').value
    let greenBG = gID('green-alert-bg').value
    let greenLink = gID('green-alert-link').value
    let yellowBG = gID('yellow-alert-bg').value
    let yellowLink = gID('yellow-alert-link').value

    // misc images
    let logoImg = gID('logo-img').value
    logoImg = onTheDL(logoImg)
    let caveImg = gID('cave-img').value
    caveImg = onTheDL(caveImg)
    let prideTabs = gID('pride-img').value
    if (prideTabs == '') {
        prideTabs = caveImg
    }
    prideTabs = onTheDL(prideTabs)
    let moundImg = gID('mound-img').value
    if (moundImg == '') {
        moundImg = caveImg
    }
    moundImg = onTheDL(moundImg)
    let featuredImg = gID('featured-img').value
    let dynastyImg = gID('dynasty-img').value
    if (dynastyImg == '') {
        dynastyImg = caveImg
    }
    dynastyImg = onTheDL(dynastyImg)

    // event flavor text
    let event = gID('event-text').value

    // box shadow check
    let shadowColor = gID('shadow-color').value

    // button colors
    let button1 = gID('button1').value
    let button2 = ''
    let button3 = ''
    let button4 = ''
    let button5 = ''
    let button6 = ''
    if (button1 != '') {
        button2 = translate(button1, 1)
        button3 = translate(button1, 2)
        button4 = translate(button1, 3)
        button5 = translate(button1, 4)
        button6 = translate(button1, 5)
    }
    let buttonText = gID('button-text').value
    let buttonTextShade = gID('button-text-check').checked
    if (buttonText == '') {
        buttonText = fontPrimary
        buttonTextShade = textCheck
    }
    let redButton1 = gID('red-button1').value
    let redButton2 = ''
    let redButton3 = ''
    let redButton4 = ''
    let redButton5 = ''
    let redButton6 = ''
    if (redButton1 != '') {
        redButton2 = translate(redButton1, 1)
        redButton3 = translate(redButton1, 2)
        redButton4 = translate(redButton1, 3)
        redButton5 = translate(redButton1, 4)
        redButton6 = translate(redButton1, 5)
    }
    let redButtonText = gID('red-button-text').value
    let redButtonTextShade = gID('red-button-text-check').checked
    if (redButtonText == '') {
        redButtonText = fontPrimary
        redButtonTextShade = textCheck
    }

    // add checks for all required fields later
    // also add box shadow check for everything
    displayCode(font, fontPrimary, fontSecondary, fontTertiary, textCheck, fontMain, fontMainType, fontHead, fontHeadType, bgColor, bgImg, mobileImg, primaryOne, primaryTwo, primaryThree, primaryFour, secondaryOne, secondaryTwo, secondaryThree, secondaryFour, tertiary, border, borderColor, borderRound, tableBorder, kingImgHover, kingImgStyle, kingImgHoverStyle, logoImg, redBG, redLink, greenBG, greenLink, yellowBG, yellowLink, htmlBox, popUp, plainBox, caveImg, prideTabs, moundImg, featuredImg, dynastyImg, event, button1, button2, button3, button4, button5, button6, buttonText, buttonTextShade, redButton1, redButton2, redButton3, redButton4, redButton5, redButton6, redButtonText, redButtonTextShade, shadowColor)
})

function displayCode(font, fc1, fc2, fc3, tCheck, fontMain, fontMainType, fontHead, fontHeadType, bgColor, bgImage, mImg, pc1, pc2, pc3, pc4, sc1, sc2, sc3, sc4, tc, border, bc, br, tbr, kingHov, kingStyle, kingHovStyle, logo, redBG, redLink, greenBG, greenLink, yellowBG, yellowLink, boxType, popUp, plainBox, cave, pride, mound, fLion, dynasty, event, b1, b2, b3, b4, b5, b6, bText, bTextShade, rb1, rb2, rb3, rb4, rb5, rb6, rbText, rbTextShade, shc) {
    const varText = variables(fc1, fc2, fc3, fontMain, fontMainType, fontHead, fontHeadType, bgColor, pc1, pc2, pc3, pc4, sc1, sc2, sc3, sc4, tc, bc, redBG, redLink, greenBG, greenLink, yellowBG, yellowLink, event, b1, b2, b3, b4, b5, b6, bText, rb1, rb2, rb3, rb4, rb5, rb6, rbText)
    const bodyText = body(bgColor, bgImage) // no box-shadow
    const topbarText = topbar(border, br, shc)
    const navbarText = navbar(border, bc, br, logo) // no box-shadow
    const mainText = main(border, br, shc)
    const breadcrumbText = breadcrumb(border, br, shc)
    const sidebarText = sidebar(border, br, shc)
    const progressText = progressBar(tCheck) // no box-shadow
    const alertText = alertBars(border, br, shc)
    const htmlText = htmlBox(border, br, boxType, popUp, plainBox, shc)
    const commentText = comments(border, shc)
    const tableText = tables(fc1, border, tbr, kingHov, kingStyle, kingHovStyle, shc)
    const clanText = clanDesc(border, shc)
    const caveText = caves(border, br, cave, pride, mound, shc)
    const featuredLionText = featuredLion(border, br, fLion, shc)
    const moundText = mounds(border, br, shc)
    const featureText = featureStyle(border, br, shc)
    const dynastyText = dynasties(border, br, dynasty, shc)
    const branchText = branch(border) // no box-shadow
    const buttonText = buttons(br, bTextShade, rbTextShade) // no box-shadow
    const eventText = eventFlavor() // no box-shadow
    const footerText = footer(tCheck) // no box-shadow
    const chatText = chat(fc1, fc2, tCheck, pc1, pc2, pc3, pc4, sc1, sc4, border, bc) // no box-shadow (gets cut off)
    const mediaText = media(bgColor, mImg, boxType) // no box-shadow

    finalCode.innerHTML = `<div class="d-flex justify-content-between align-items-end"><label class="form-label fs-3 fw-medium" for="code-box">Your Code:</label><button onclick="copyButton()" class="btn btn-primary mb-3">Copy Code</button></div><textarea name="copy-field" class="form-control copy-field" id="code-box">/*
    This layout was made by thystle (#14796) using a template made by Chris (#105465).
    Please do not copy, reproduce or edit this code in any way. Template is not for public use.
    */
    
    /* font import */
    ${font}
    
    /*variables*/
    ${varText}

    /* Body */
    ${bodyText}
    
    /* Topbar */
    ${topbarText}
    
    /* Navbar */
    ${navbarText}
    
    /* main */
    ${mainText}

    /* Breadcrumb */
    ${breadcrumbText}
    
    /* Side Bar */
    ${sidebarText}
    
    /* Progress Bars */
    ${progressText}
    
    /* alerts */
    ${alertText}
    
    /* HTML Boxes if applicable */
    ${htmlText}
    
    /* comment box */
    ${commentText}
    
    /* tables */
    ${tableText}
    
    /* CLAN STUFF */
    ${clanText}
    
    /* Caves and Mounds Main */
    ${caveText}
    
    /* featured lion section */
    ${featuredLionText}
    
    /* Inner Mounds */
    ${moundText}
    
    /* Feature Styling (like feed all play all etc.) */
    ${featureText}
    
    /* Dynasty Pills */
    ${dynastyText}
    
    /* Branch */
    ${branchText}
    
    /* Buttons */
    ${buttonText}
    
    /* Event Flavor Text */
    ${eventText}
    
    /* Footer */
    ${footerText}
    
    /*#region Chat */
    ${chatText}/*#endregion */
    
    /* Media Query Adjustments */
    ${mediaText}</textarea>`
}

function copyButton() {
    var copyText = gID('code-box')

    copyText.select()

    navigator.clipboard.writeText(copyText.value)

    alert(`Copied your code for you! :D`)
}

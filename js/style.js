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

// body and starting text
function body(fc1, fc2, fontMain, fontMainType, fontHead, fontHeadType, bgColor, bgImage) {
    const bodyText = `body {&#10;font-family: '${fontMain}', ${fontMainType};&#10;background: #${bgColor} url('${bgImage}') fixed;&#10;background-position-y: center;&#10;background-position-x: center;&#10;/* DON'T CHANGE BELOW */&#10;background-repeat: no-repeat;&#10;background-size: cover;&#10;color: #${fc1};&#10;}&#10;&#10;/* Headers */&#10;h1, h2, h3, .sidebar h3 {&#10;color: #${fc1};&#10;font-family: '${fontHead}', ${fontHeadType};&#10;}&#10;&#10;/* Other Text */&#10;p, b, #fraProfileContent {&#10;color: #${fc1};&#10;}&#10;small {&#10;color: #${fc1} !important;&#10;}&#10;&#10;/* Links */&#10;a:link, a:visited, a:active {&#10;color: #${fc2};&#10;}&#10;a:hover, a:focus {&#10;color: #${fc1};&#10;}`

    return bodyText
}

// topbar
function topbar(fc1, fc2, pc1, border, br, shc) {
    const topbarText = `.topbar a:link, .topbar a:visited, .topbar a:active {&#10;color: #${fc2};&#10;}&#10;.topbar a:hover, .topbar a:focus {&#10;color: #${fc1};&#10;}&#10;.topbar {&#10;background: #${pc1};&#10;border: ${border};&#10;border-top: none;${(br) ? 'border-bottom-left-radius: 10px;&#10;border-bottom-right-radius: 10px;&#10;' : ''}&#10;color: #${fc1};&#10;${(shc != '') ? `box-shadow: 0 0 10px #${shc};&#10;` : ''}}`

    return topbarText
}

// navbar
function navbar(fc1, fc2, fontHead, fontHeadType, pc1, pc2, pc3, border, bc, br, logo) {
    let navbarText = `.navbar {&#10;background: #${pc2};&#10;border-bottom: ${(border == 'none') ? border : `1px solid #${bc}`};&#10;${(br) ? 'border-top-right-radius: 10px;&#10;border-top-left-radius: 10px;&#10;' : ''}font-family: '${fontHead}', ${fontHeadType};&#10;}&#10;/* logo */&#10;.navbar-brand img {&#10;${(logo == '') ? '' : `content: url(\'${logo}\');&#10;`}filter: none;&#10;}&#10;/* navbar defaults */&#10;.navbar-default .navbar-nav > .active > a, .navbar-default .navbar-nav > .active > a:hover, .navbar-default .navbar-nav > .active > a:focus, .navbar-default .navbar-collapse, .navbar-default .navbar-form {&#10;color: #${fc2};&#10;}&#10;.navbar-default .navbar-nav > li > a {&#10;color: #${fc2};&#10;font-weight: bold;&#10;}&#10;/* mobile toggle box */&#10;.navbar-default .navbar-toggle {&#10;border-color: transparent;&#10;}&#10;/* make different from navbar */&#10;.navbar-default .navbar-toggle:hover,&#10;.navbar-default .navbar-toggle:focus {&#10;background: #${pc3};&#10;}&#10;/* bars in navbar icon */&#10;.navbar-default .navbar-toggle .icon-bar {&#10;background: #${fc1};&#10;}&#10;/* collapsed navbar */&#10;.navbar-default .navbar-collapse, .navbar-default .navbar-form {&#10;border-color: #${pc1};&#10;box-shadow: none;&#10;}&#10;/* active and hovered links in navbar */&#10;.navbar-default .navbar-nav > .active > a:hover, .navbar-default .navbar-nav > .active > a:focus, .navbar-default .navbar-nav li a:hover, .navbar-default .navbar-nav li a:focus, .navbar .active a:link, .navbar .active a:visited, .navbar .active a:active, .navbar .active a:focus {&#10;background: #${pc3};&#10;color: #${fc1};&#10;}`

    return navbarText
}

// main
function main(bgColor, border, br, shc) {
    const mainText = `.main {&#10;background: #${bgColor}80;&#10;border-radius: ${(br) ? '10px' : '0'};&#10;border: ${border};&#10;${(shc != '') ? `box-shadow: 0 0 10px #${shc};&#10;` : 'box-shadow: none;&#10;'}}&#10;/* territory box */&#10;.col-md-9 {&#10;background: none;&#10;}`

    return mainText
}

// breadcrumb
function breadcrumb(fc1, fc3, pc3, border, br, shc) {
    const breadcrumbText = `.breadcrumb {&#10;background: #${pc3};&#10;border: ${border};&#10;${(br) ? 'border-radius: 10px;&#10;' : ''}${(shc != '') ? `box-shadow: 1px 1px 3px #${shc};&#10;` : ''}}&#10;.breadcrumb::after {&#10;content: "CSS by thystle (#14796)";&#10;position: absolute;&#10;right: 20%;&#10;z-index: 100;&#10;color: #${fc1};&#10;}&#10;.breadcrumb-item.active, .breadcrumb-item::before {&#10;color: #${fc3} !important;&#10;}`

    return breadcrumbText
}

// side bar
function sidebar(fc1, pc3, border, br, shc) {
    const sidebarText = `/* side panel bg */&#10;.sidebar.col-md-3 {&#10;background: none;&#10;}&#10;/* sidebar inner boxes */&#10;.col-md-3 .panel {&#10;border: ${border};&#10;${(br) ? 'border-radius: 10px;&#10;' : ''}background: #${pc3};&#10;${(shc != '') ? `box-shadow: 1px 1px 3px #${shc};&#10;` : 'box-shadow: none;&#10;'}color: #${fc1};&#10;}&#10;/* dotted line above chat on smaller screen sizes */&#10;.clear {&#10;border-color: #${fc1} !important;&#10;}`

    return sidebarText
}

// progress bars
function progressBar(fontMain, fontMainType) {
    const progressText = `/* background container */&#10;.progress {&#10;background: #fff;&#10;/* border-radius: 20px; */&#10;}&#10;/* default and impression */&#10;.progress-bar {&#10;background: #ffd199;&#10;}&#10;/* if you want all to match comment out the next three classes */&#10;/* exp, hunger, energy, and thirst respectively */&#10;/* .progress-bar-success {&#10;background: #ffc680;&#10;}&#10;.progress-bar-danger {&#10;background: #ffba66;&#10;}&#10;.progress-bar-warning {&#10;background: #ffaf4d;&#10;}&#10;.progress-bar-info {&#10;background: #ffaf4d;&#10;} */&#10;/* text inside the progress bars */&#10;.progress div {&#10;color: #000;&#10;font-family: '${fontMain}', ${fontMainType};&#10;}`

    return progressText
}

// alerts
function alertBars(fc1, border, br, redBG, redLink, greenBG, greenLink, yellowBG, yellowLink, shc) {
    const alertText = `/* all */&#10;.alert-danger, .alert-success, .alert-warning, .alert {&#10;color: #${fc1};&#10;background: #${greenBG};&#10;border: ${border};&#10;${(br) ? 'border-radius: 10px;&#10;' : ''}${(shc != '') ? `box-shadow: 1px 1px 3px #${shc};&#10;` : ''}}&#10;/* red notifications */&#10;.alert-danger {&#10;color: #${fc1};&#10;background: #${redBG};&#10;}&#10;.alert-danger > a, .alert-danger > a:link, .alert-danger > a:active, .alert-danger > a:visited {&#10;color: #${redLink};&#10;}&#10;.alert-danger > a:hover, .alert-danger > a:focus, .alert-danger b {&#10;color: #${fc1};&#10;}&#10;/* green notifications */&#10;.alert-success {&#10;color: #${fc1};&#10;background: #${greenBG};&#10;}&#10;.alert-success > a, .alert-success > a:link, .alert-success > a:active, .alert-success > a:visited {&#10;color: #${greenLink};&#10;}&#10;.alert-success > a:hover, .alert-success > a:focus, .alert-success b {&#10;color: #${fc1};&#10;}&#10;/* yellow notifications */&#10;.alert-warning {&#10;color: #${fc1};&#10;background: #${yellowBG};&#10;}&#10;.alert-warning > a, .alert-warning > a:link, .alert-warning > a:active, .alert-warning > a:visited {&#10;color: #${yellowLink};&#10;}&#10;.alert-warning > a:hover, .alert-warning > a:focus, .alert-warning b {&#10;color: #${fc1};&#10;}`

    return alertText
}

// html boxes
function htmlBox(fc1, pc3, border, br, boxType, popUp, plainBox, shc) {
    if (boxType == '3' || !plainBox) {
        // get rid of attempts to add a plain box if they selected the khoshekh boxes or if not selected
        plainBox = ''
    } else {
        plainBox = `.plainBox {&#10;background: #${pc3};&#10;color: #${fc1};&#10;border: ${border};&#10;border-radius: ${(br) ? '10px' : '3px'};&#10;width: 90%;&#10;margin: 0 auto;&#10;padding: 20px;&#10;height: auto;&#10;overflow: auto;&#10;${(shc != '') ? `box-shadow: 1px 1px 3px #${shc};&#10;` : ''}}&#10;.plainBox h1, .plainBox h2, .plainBox h3 {&#10;margin: 0;&#10;color: #${fc1};&#10;}`
    }
    if (popUp) {
        popUp = `.profileTab {&#10;background: #${pc3};&#10;color: #${fc1};&#10;border: ${border};&#10;border-bottom: none;&#10;padding: 15px;&#10;position: fixed;&#10;left: 5px;&#10;bottom: 0;&#10;height: 50px;&#10;width: 250px;&#10;border-top-right-radius: ${(br) ? '10px' : '3px'};&#10;border-top-left-radius: ${(br) ? '10px' : '3px'};&#10;transition: 2s;&#10;z-index: 100;&#10;overflow: scroll;&#10;${(shc != '') ? `box-shadow: 0 0 10px #${shc};&#10;` : ''}}&#10;.profileTab:hover, .profileTab:focus {&#10;height: 300px;&#10;}&#10;.profileTab h1, .profileTab h2, .profileTab h3 {&#10;margin: 0;&#10;color: #${fc1};&#10;}&#10;.profileTab::-webkit-scrollbar {&#10;width: 0;&#10;height: 0;&#10;}`
    } else {
        // set to nothing for ease of use
        popUp = ''
    }
    if (boxType == 'none') {
        boxType = ''
    } else if (boxType == '1') {
        // hover box
        boxType = `.bigBox {&#10;background: #${pc3};&#10;color: #${fc1};&#10;border: ${border};&#10;border-radius: ${(br) ? '10px' : '3px'};&#10;padding: 30px;&#10;margin: 20px;&#10;margin-bottom: 0;&#10;height: 80px;&#10;overflow: auto;&#10;transition: 2s;&#10;${(shc != '') ? `box-shadow: 1px 1px 3px #${shc};&#10;` : ''}}&#10;.bigBox:hover, .scrollBox:hover {&#10;height: 300px;&#10;}&#10;.bigBox h1, .bigBox h2, .bigBox h3, .scrollBox h1, .scrollBox h2, .scrollBox h3 {&#10;margin: 0;&#10;color: #${fc1};&#10;}&#10;/* scrollbars */&#10;.bigBox::-webkit-scrollbar, .scrollBox::-webkit-scrollbar {&#10;width: 0;&#10;height: 0;&#10;}&#10;/* section holding small boxes */&#10;.scrollSection {&#10;display: flex;&#10;justify-content: center;&#10;}&#10;/* small box */&#10;.scrollBox {&#10;background: #${pc3};&#10;color: #${fc1};&#10;border: ${border};&#10;border-radius: ${(br) ? '10px' : '3px'};&#10;padding: 20px;&#10;height: 60px;&#10;width: 450px;&#10;margin: 20px;&#10;margin-bottom: 0;&#10;overflow: auto;&#10;float: left;&#10;transition: 2s;&#10;${(shc != '') ? `box-shadow: 1px 1px 3px #${shc};&#10;` : ''}}`
    } else if (boxType == '2') {
        // side boxes
        boxType = `.bigBox {&#10;background: #${pc3};&#10;color: #${fc1};&#10;border: ${border};&#10;overflow: scroll;&#10;height: 320px;&#10;width: 46%;&#10;padding: 20px;&#10;float: left;&#10;margin: 10px;&#10;margin-bottom: 20px;&#10;border-radius: ${(br) ? '10px' : '3px'};&#10;text-align: left;&#10;${(shc != '') ? `box-shadow: 1px 1px 3px #${shc};&#10;` : ''}}&#10;.scrollBox {&#10;background: #${pc3};&#10;color: #${fc1};&#10;border: ${border};&#10;overflow: scroll;&#10;height: 150px;&#10;width: 46%;&#10;padding: 20px;&#10;float: right;&#10;margin: 10px;&#10;border-radius: ${(br) ? '10px' : '3px'};&#10;text-align: left;&#10;${(shc != '') ? `box-shadow: 1px 1px 3px #${shc};&#10;` : ''}}&#10;.scrollSection {&#10;margin: 0 auto;&#10;width: 90%;&#10;height: 350px;&#10;}&#10;.bigBox::-webkit-scrollbar, .scrollBox::-webkit-scrollbar {&#10;width: 0;&#10;height: 0;&#10;}&#10;.bigBox h1, .bigBox h2, .bigBox h3, .scrollBox h1, .scrollBox h2, .scrollBox h3 {&#10;margin: 0;&#10;color: #${fc1};&#10;}`
    } else {
        // khoshekh boxes
        boxType = `.bigBox {&#10;background: #${pc3};&#10;border-radius: ${(br) ? '10px' : '3px'};&#10;border: ${border};&#10;color: #${fc1};&#10;overflow: scroll;&#10;height: 200px;&#10;width: 57%;&#10;padding: 20px;&#10;float: left;&#10;margin: 10px;&#10;margin-bottom: 20px;&#10;text-align: left;&#10;${(shc != '') ? `box-shadow: 1px 1px 3px #${shc};&#10;` : ''}}&#10;.scrollBox {&#10;background: #${pc3};&#10;color: #${fc1};&#10;overflow: scroll;&#10;border-radius: ${(br) ? '10px' : '3px'};&#10;border: ${border};&#10;height: 200px;&#10;width: 37%;&#10;padding: 20px;&#10;float: right;&#10;margin: 10px;&#10;text-align: left;&#10;${(shc != '') ? `box-shadow: 1px 1px 3px #${shc};&#10;` : ''}}&#10;.scrollSection {&#10;margin: 0 auto;&#10;width: 100%;&#10;height: 230px;&#10;}&#10;@media (max-width: 715px) {&#10;.bigBox {&#10;width: 56%;&#10;}&#10;.scrollBox {&#10;width: 36%;&#10;}&#10;}&#10;.plainBox {&#10;background: #${pc3};&#10;color: #${fc1};&#10;border-radius: ${(br) ? '10px' : '3px'};&#10;border: ${border};&#10;margin: 0 10px 0 10px;&#10;padding: 20px;&#10;height: 150px;&#10;overflow: scroll;&#10;${(shc != '') ? `box-shadow: 1px 1px 3px #${shc};&#10;` : ''}}&#10;.bigBox::-webkit-scrollbar, .scrollBox::-webkit-scrollbar, .plainBox::-webkit-scrollbar {&#10;width: 0;&#10;height: 0;&#10;}&#10;.bigBox h1, .bigBox h2, .bigBox h3, .scrollBox h1, .scrollBox h2, .scrollBox h3, .plainBox h1, .plainBox h2, .plainBox h3 {&#10;margin: 0;&#10;color: #${fc1};&#10;}`
    }
    const htmlText = `${boxType}${(popUp == '') ? '' : `&#10;&#10;${popUp}`}${(plainBox == '') ? '' : `&#10;&#10;${plainBox}`}`

    return htmlText
}

// comment box
function comments(pc1, pc2, pc3, pc4, border, shc) {
    const commentText = `#commentBox {&#10;border: ${border} !important;&#10;border-radius: 5px !important;&#10;height: 200px !important;&#10;background: #${pc4};&#10;${(shc != '') ? `box-shadow: 1px 1px 3px #${shc};&#10;` : ''}}&#10;.comment:nth-child(even) {&#10;background: #${pc3} !important;&#10;}&#10;/* scrollbar */&#10;#commentBox::-webkit-scrollbar{&#10;height: 0;&#10;width: 8px;&#10;border-top-right-radius: 5px;&#10;border-bottom-right-radius: 5px;&#10;background: #fff;&#10;}&#10;/* scrollbar button */&#10;#commentBox::-webkit-scrollbar-thumb {&#10;background: #${pc2};&#10;border-top-right-radius: 5px;&#10;border-bottom-right-radius: 5px;&#10;}&#10;#commentBox::-webkit-scrollbar-thumb:hover {&#10;background: #${pc1};&#10;}`

    return commentText
}

// tables
function tables(fc1, fc2, fontHead, fontHeadType, sc1, sc2, sc3, sc4, tc, border, tbr, kingHov, kingStyle, kingHovStyle, shc) {
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
    const tableText = `/* table headers */&#10;.table .top, .table th {&#10;background: #${sc1};&#10;color: #${fc1};&#10;font-family: '${fontHead}', ${fontHeadType};&#10;font-weight: bold;&#10;${(tbr) ? 'border-top-right-radius: 10px;&#10;border-top-left-radius: 10px;&#10;' : ''}}&#10;/* lion title and name */&#10;.xlarge.b {&#10;font-weight: bold;&#10;}&#10;/* lion image */&#10;#lion_image > div {&#10;${(kingHov) ? 'transition: 1s;&#10;' : ''}border-radius: ${kingStyle};&#10;border: ${border};&#10;}&#10;${(kingHov) ? `a:hover > #lion_image > div, a:focus > #lion_image > div {&#10;border-radius: ${kingHovStyle};&#10;}&#10;` : ''}/* table body */&#10;.table {&#10;background: #${sc4};&#10;border: ${border};&#10;color: #${fc1};&#10;${(tbr) ? `border-collapse: separate;&#10;border-radius: 10px;&#10;` : ''}${(shc != '') ? `box-shadow: 1px 1px 3px #${shc};&#10;` : ''}}&#10;/* table links */&#10;.table .top a:link, .table .top a:active, .table .top a:visited, .table th a:link, .table th a:active, .table th a:visited {&#10;color: #${fc2};&#10;font-weight: bold;&#10;border-bottom: none;&#10;}&#10;.table .top a:hover, .table th a:hover, .table .top a:focus, .table th a:focus {&#10;color: #${fc1};&#10;font-weight: bold;&#10;}&#10;/* left side of stats on king and status bars in caves */&#10;.table .left {&#10;background: #${sc2};&#10;}&#10;` +
        `/* left side of stats on king */&#10;.inner-table .left {&#10;border-top-left-radius: 5px;&#10;border-bottom-left-radius: 5px;&#10;}&#10;/* right side of king stats */&#10;.inner-table .right {&#10;border-top-right-radius: 5px;&#10;border-bottom-right-radius: 5px;&#10;background: #${sc3};&#10;}&#10;/* every other lion in caves */&#10;.table .right_odd {&#10;background: #${sc3};&#10;}&#10;/* table footers */&#10;.table .innerHeader, .table .bottom, #player > tbody > tr {&#10;background: #${sc1};&#10;color: #${fc1};&#10;${(tbr) ? `border-bottom-left-radius: 10px;&#10;border-bottom-right-radius: 10px;&#10;` : ''}}&#10;/* player table footer adjustments for rounded corners */&#10;#player .right_odd {&#10;background: none;&#10;${(tbr) ? `border-bottom-right-radius: 10px;&#10;` : ''}}&#10;${(tbr) ? `#player .right_odd:first-child {&#10;border-bottom-left-radius: 10px;&#10;border-bottom-right-radius: 0;&#10;}&#10;` : ''}#player tr.right {&#10;background: none;&#10;}&#10;/* quick link to mutated lions under king panel */&#10;.table .bottom a:link, .table .bottom a:visited, .table .bottom a:active {&#10;color: #${fc2};&#10;text-decoration: none;&#10;}&#10;.table .bottom a:hover, .table .bottom a:focus {&#10;color: #${fc1};&#10;text-decoration: underline;&#10;}&#10;/* hr in player table */&#10;#player hr {&#10;border-color: transparent;&#10;margin: 0;&#10;margin-top: 1em;&#10;}&#10;/* little :|: spans in player table */&#10;#player .text-muted {&#10;color: #${fc1}80;&#10;}&#10;/* days left until heat badge */&#10;.badge {&#10;background: #${tc};&#10;color: #${fc1};&#10;border: ${border};&#10;}&#10;/* inputs for typing in text in territory description etc. */&#10;textarea, input, select, #fra_chatContainer #txtChatInput {&#10;color: #000000;&#10;background: #ffffff;&#10;border: 1px solid #${sc1};&#10;}&#10;input::placeholder {&#10;color: #00000080;&#10;}${(tbr) ? `&#10;form .table, form .table th, form .table .bottom, .table.auto, .table.auto .top, .table.auto th, .table.auto .bottom {&#10;border-radius: 0 !important;&#10;}&#10;#pride tr:last-child td:last-child {&#10;border-radius: 0 0 10px 0;&#10;}&#10;#pride tr:last-child td:first-child {&#10;border-radius: 0 0 0 10px;&#10;}&#10;#sparring .right_odd {&#10;border-bottom-right-radius: 10px;&#10;}` : ''}`

    return tableText
}

// clan bits
function clanDesc(pc4, border, shc) {
    const clanText = `.page-description {&#10;border: ${border};&#10;background: #${pc4};&#10;padding: 20px;&#10;${(shc != '') ? `box-shadow: 1px 1px 3px #${shc};&#10;` : ''}}&#10;.page-description > div {&#10;padding: 0;&#10;margin: 0;&#10;}`

    return clanText
}

// caves
function caves(fc1, fc2, tc, border, br, cave, pride, mound, shc) {
    const caveText = `/* main overrides */&#10;.mound-grid, .cave-grid {&#10;background: #${tc};&#10;border: ${border};&#10;${(br) ? `border-radius: 10px;&#10;` : ''}color: #${fc2};&#10;${(shc != '') ? `box-shadow: 1px 1px 3px #${shc};&#10;` : ''}}&#10;/* cave and mound link hover */&#10;.center > a:hover > .cave-grid, .center > a:focus > .cave-grid, .center > a:hover > .mound-grid, .center > a:focus > .mound-grid {&#10;color: #${fc1};&#10;}&#10;/* cave and mound customization */&#10;/* all caves */&#10;.cave-grid > img {&#10;content: url('${cave}');&#10;height: 120px;&#10;object-fit: cover;&#10;object-position: top;&#10;}&#10;/* pride tabs */&#10;img[src$='//static.lioden.com/images/layout/unsortedlionsbanner.png'], img[src$='//static.lioden.com/images/layout/nestingbanner.png'], img[src$='//static.lioden.com/images/layout/prideoverviewbanner.png'] {&#10;content: url('${pride}');&#10;height: 80px;&#10;object-fit: cover;&#10;object-position: top;&#10;}&#10;/* unsorted lions */&#10;/* img[src$='//static.lioden.com/images/layout/unsortedlionsbanner.png'] {&#10;content: url('LINK');&#10;object-position: top;&#10;} */&#10;/* pregnant lionesses */&#10;/* img[src$='//static.lioden.com/images/layout/nestingbanner.png'] {&#10;content: url('LINK');&#10;object-position: top;&#10;} */&#10;/* pride overview */&#10;/* img[src$='//static.lioden.com/images/layout/prideoverviewbanner.png'] {&#10;content: url('LINK');&#10;object-position: top;&#10;} */&#10;/* all mounds */&#10;/* .mound-grid img {&#10;content: url('LINK');&#10;padding: 5px;&#10;} */&#10;/* all mounds but like a cave */&#10;.mound-grid {&#10;padding: 0 0 5px 0;&#10;}&#10;.mound-grid img {&#10;content: url('${mound}');&#10;height: 100px;&#10;width: 100%;&#10;object-fit: cover;&#10;object-position: center;&#10;}&#10;/* create mound image and empty cave slots */&#10;img[src$='//static.lioden.com/images/layout/addbeetlemound.png'], img[src$='//static.lioden.com/images/layout/caveunused.jpg'] {&#10;filter: saturate(50%);&#10;}`

    return caveText
}

// featured lion
function featuredLion(fc1, fc2, sc1, border, bc, br, fLion, shc) {
    if (border != 'none') {
        // box-shadow: 0 0 0 1px #aba5c0;
        border = `0 0 0 1px #${bc}`
    }
    if (shc != '' && border != 'none') {
        border += `, 1px 1px 3px #${shc}`
    } else if (shc != '') {
        border = `1px 1px 3px #${shc}`
    }
    const featuredLionText = `.featured-lion {&#10;background: #${sc1};&#10;color: #${fc1};&#10;margin-bottom: 20px;&#10;${(br) ? 'border-radius: 10px;&#10;' : ''}${(border != 'none') ? `box-shadow: ${border};&#10;` : ''}}&#10;${(br) ? '.featured-lion img {&#10;border-top-right-radius: 10px;&#10;border-top-left-radius: 10px;&#10;}&#10;' : ''}${(fLion != '') ? `/* featured lion background image */&#10;.featured-lion img[src$='//static.lioden.com/images/cave/default.png'] {&#10;content: url('${fLion}') !important;&#10;/* filter: none; */&#10;}&#10;` : ''}/* very important if you want it to not look ugly anymore lol don't change the padding here or the media queries at the bottom */&#10;.featured-lion .b {&#10;padding-top: 8px;&#10;}&#10;.featured-lion a:hover, .featured-lion a:focus {&#10;color: #${fc1};&#10;}&#10;.featured-lion a:link, .featured-lion a:active, .featured-lion a:visited {&#10;color: #${fc2};&#10;}&#10;/* owned by text */&#10;h1.center > small, h1.center > small a:hover, h1.center > small a:focus {&#10;color: #${fc1} !important;&#10;}&#10;h1.center > small a, h1.center > small a:link, h1.center > small a:visited, h1.center > small a:active {&#10;color: #${fc2} !important;&#10;}&#10;/* dropdown text */&#10;.table .bottom select {&#10;color: #000;&#10;}`

    return featuredLionText
}

// inner mounds
function mounds(sc1, border, br, shc) {
    const moundText = `/* menu bg */&#10;.sub_menu {&#10;background: #${sc1};&#10;border: ${border};&#10;${(br) ? 'border-radius: 10px;&#10;' : ''}${(shc != '') ? `box-shadow: 1px 1px 3px #${shc};&#10;` : ''}}&#10;.sub_sub_menu {&#10;display: none;&#10;}`

    return moundText
}

// feature styling
function featureStyle(fc1, sc4, border, br, shc) {
    const featureText = `div.feature {&#10;${(br) ? 'border-radius: 10px;&#10;' : ''}border: ${border};&#10;background: #${sc4};&#10;padding: 20px;&#10;padding-top: 10px;&#10;padding-bottom: 10px;&#10;${(shc != '') ? `box-shadow: 1px 1px 3px #${shc};&#10;` : ''}}&#10;/* dropdown width (acts funny on smaller screens at the default 200px sometimes) */&#10;div.feature select {&#10;width: 180px !important;&#10;}&#10;/* header */&#10;div.feature h3 {&#10;color: #${fc1};&#10;}&#10;.feature-footer {&#10;background: #${sc4};&#10;}&#10;/* inner text */&#10;.feature .xsmall {&#10;color: #${fc1};&#10;}`

    return featureText
}

// dynasty pills
function dynasties(fc1, fc2, tc, border, br, dynasty, shc) {
    const dynastyText = `/* dynasty main */&#10;div.left {&#10;background: #${tc};&#10;${(br) ? 'border-radius: 10px;&#10;' : ''}border: ${border};&#10;color: #${fc1};&#10;${(shc != '') ? `box-shadow: 1px 1px 3px #${shc};&#10;` : ''}}&#10;/* custom dynasty images */&#10;div.left img {&#10;content: url('${dynasty}');&#10;object-fit: cover;&#10;object-position: center;&#10;padding: 0;&#10;height: 60px;&#10;max-width: 500px !important;&#10;border-bottom-left-radius: inherit;&#10;border-bottom-right-radius: inherit;&#10;}&#10;.dynastylist .left {&#10;padding: 5px 0 0 0;&#10;}&#10;/* dynasty headers */&#10;.dynastylist h3 {&#10;color: #${fc2};&#10;padding-top: 5px;&#10;}&#10;.dynastylist h3:hover, .dynastylist h3:focus {&#10;color: #${fc1};&#10;}&#10;/* links in the pills beneath dynasty stuff */&#10;a div.left {&#10;color: #${fc2};&#10;}&#10;a div.left:hover, a div.left:focus {&#10;color: #${fc1};&#10;}`

    return dynastyText
}

// branch
function branch(fc1, sc2, sc3, border) {
    const branchText = `.item {&#10;background: #${sc3};&#10;border: ${border};&#10;border-radius: 5px;&#10;}&#10;.item-header {&#10;background: #${sc2};&#10;color: #${fc1};&#10;border-top-left-radius: 5px;&#10;border-top-right-radius: 5px;&#10;}&#10;.item-footer {&#10;background: #${sc2};&#10;color: #${fc1};&#10;border-bottom-left-radius: 5px;&#10;border-bottom-right-radius: 5px;&#10;}`

    return branchText
}

// buttons
function buttons(fontMain, fontMainType, br, b1, b2, b3, b4, b5, b6, bText, bTextShade, rb1, rb2, rb3, rb4, rb5, rb6, rbText, rbTextShade) {
    const buttonText = `/* all */&#10;.select-control, button.button, input[type="button"], input[type="submit"], input[type="reset"], .select-control:hover, button.button:hover, input[type="button"]:hover, input[type="submit"]:hover, input[type="reset"]:hover, .select-control.bad, button.button.bad, input[type="button"].bad, input[type="submit"].bad, input[type="reset"].bad, .select-control.bad:hover, button.button.bad:hover, input[type="button"].bad:hover, input[type="submit"].bad:hover, input[type="reset"].bad:hover {&#10;border-radius: ${(br) ? '5px' : '3px'};&#10;}&#10;/* regular button */&#10;.select-control, button.button, input[type="button"], input[type="submit"], input[type="reset"] {&#10;background: #${b6};&#10;background: linear-gradient(to bottom, #${b6} 5%,#${b4} 5%,#${b4} 95%,#${b2} 95%);&#10;color: #${bText};&#10;border: 1px solid #${b2};&#10;text-shadow: 1px 1px 0px #${(bTextShade) ? b2 : b6};&#10;font-family: '${fontMain}', ${fontMainType};&#10;}&#10;/* regular button hover */&#10;.select-control:hover, button.button:hover, input[type="button"]:hover, input[type="submit"]:hover, input[type="reset"]:hover {&#10;background: #${b5};&#10;background: linear-gradient(to bottom,  #${b5} 5%,#${b3} 5%,#${b3} 95%,#${b1} 95%);&#10;color: #${bText};&#10;border: 1px solid #${b1};&#10;text-shadow: 1px 1px 0px #${(bTextShade) ? b1 : b5};&#10;}&#10;/* red button */&#10;.select-control.bad, button.button.bad, input[type="button"].bad, input[type="submit"].bad, input[type="reset"].bad {&#10;background: #${rb6};&#10;background: linear-gradient(to bottom,  #${rb6} 5%,#${rb4} 5%,#${rb4} 49%,#${rb4} 95%,#${rb2} 95%);&#10;color: #${rbText};&#10;border: 1px solid #${rb2};&#10;text-shadow: 1px 1px 0px #${(rbTextShade) ? rb2 : rb6};&#10;}&#10;/* red button hover */&#10;.select-control.bad:hover, button.button.bad:hover, input[type="button"].bad:hover, input[type="submit"].bad:hover, input[type="reset"].bad:hover {&#10;background: #${rb5};&#10;background: linear-gradient(to bottom,  #${rb5} 5%,#${rb3} 5%,#${rb3} 49%,#${rb3} 95%,#${rb1} 95%);&#10;color: #${rbText};&#10;border: 1px solid #${rb1};&#10;text-shadow: 1px 1px 0px #${(rbTextShade) ? rb1 : rb5};&#10;}`

    return buttonText
}

// event flavor text
function eventFlavor(event) {
    const eventText = `/* has to go at the bottom since it likes to be mean to me otherwise trust me best left here lol */&#10;center > div.center.b, center > b > span {&#10;color: #${event} !important;&#10;}`

    return eventText
}

// footer
function footer(fc1, fc2, tCheck) {
    const footerText = `/* technically applies to all "white" text on the site but mainly applies to the footer text */&#10;.white {&#10;color: #${fc1};&#10;${(tCheck) ? 'text-shadow: 0 0 5px #000;&#10;' : ''}}&#10;/* bottom links container size to prevent weird stacking issues */&#10;ul.bottomlinks {&#10;width: max-content !important;&#10;}&#10;/* bottoms links */&#10;.bottomlinks li a, .bottomlinks li a:link, .bottomlinks li a:active, .bottomlinks li a:visited, .footer a, .footer a:link, .footer a:active, .footer a:visited {&#10;color: #${fc2};&#10;border-bottom: none;&#10;}&#10;.bottomlinks li a:hover, .bottomlinks li a:focus, .footer a:hover, footer a:focus {&#10;color: #${fc1};&#10;}`

    return footerText
}

// chat
function chat(fc1, fc2, tCheck, pc1, pc2, pc3, pc4, sc1, sc4, border, bc) {
    const chatText = `/* main container */&#10;#chatMessageContainer {&#10;border: ${border};&#10;}&#10;/* chat buttons */&#10;#btnChatSettings, #btnLoadNewMessages, .s-chat-message_menu {&#10;filter: grayscale() brightness(${(tCheck) ? '500' : '0'}%);&#10;}&#10;/* menu dropbox */&#10;.channelMenu > button, .channelMenu > div {&#10;background: #${pc1} !important;&#10;border-color: ${(bc == '') ? 'transparent' : `#${bc}`} !important;&#10;color: #${fc2} !important;&#10;box-shadow: none !important;&#10;}&#10;/* message text */&#10;.s-chat-message {&#10;color: #${fc1};&#10;}&#10;/* even messages */&#10;.s-chat-message:nth-child(even) {&#10;background: #${pc4};&#10;}&#10;/* odd messages */&#10;.s-chat-message:nth-child(odd) {&#10;background: #${pc3};&#10;}&#10;/* mention */&#10;#chatMessageList[data-pings="enabled"] .s-chat-message_mention, .s-chat-message.hasContext {&#10;background: #${sc4} !important;&#10;border-color: #${sc1} !important;&#10;color: #${fc1} !important;&#10;padding-left: 10px;&#10;}&#10;.s-chat-message.hasContext .s-chat-message_timestamp, .s-chat-message_mention.s-chat-message_timestamp {&#10;padding-left: 10px;&#10;}&#10;#chatMessageList[data-pings="enabled"] .s-chat-message_mention a {&#10;color: #${fc2} !important;&#10;}&#10;#chatMessageList[data-pings="enabled"] .s-chat-message_mention a:hover, #chatMessageList[data-pings="enabled"] .s-chat-message_mention a:focus {&#10;color: #${fc1} !important;&#10;}&#10;/* scrollbar */&#10;#chatMessageList::-webkit-scrollbar {&#10;width: 8px;&#10;background: #fff;&#10;}&#10;/* scrollbar button */&#10;#chatMessageList::-webkit-scrollbar-thumb {&#10;background: #${pc2};&#10;border-radius: 0;&#10;}&#10;#chatMessageList::-webkit-scrollbar-thumb:hover {&#10;background: #${pc1};&#10;}&#10;/* claim badge */&#10;.s-chat-message_claim {&#10;background: #${pc2};&#10;border-bottom: none;&#10;color: #${fc1};&#10;}&#10;` +
        `/* claim popout box stuff */&#10;#modalClaimBG {&#10;background: rgba(0, 0, 0, 0.5);&#10;}&#10;/* main inner bit */&#10;#modalClaimList {&#10;background: #${pc4};&#10;color: #${fc1};&#10;border: ${border};&#10;}&#10;#modalClaimList a, #modalClaimList a:active, #modalClaimList a:visited, #modalClaimList a:link {&#10;color: #${fc2};&#10;}&#10;#modalClaimList a:hover, #modalClaimList a:focus {&#10;color: #${fc1};&#10;}&#10;/* header */&#10;#modalClaimList h3 {&#10;background: #${pc2};&#10;color: #${fc1};&#10;}&#10;/* close button */&#10;#modalClaimList button.close {&#10;color: #${fc1};&#10;}&#10;/* pinned message */&#10;#chatMessagePinned, #chatMessagePinned.s-chat-message__pinned {&#10;background: #${pc1};&#10;color: #${fc1} !important;&#10;border: none !important;&#10;}&#10;.s-chat-sidebar #chatMessagePinned.s-chat-message__pinned {&#10;text-indent: 4px;&#10;}&#10;/* timestamp */&#10;.s-chat-message_timestamp {&#10;color: #${fc1};&#10;}&#10;/* mod message text (best left at #000) */&#10;.s-chat-message__mod, .s-chat-message__mod .s-chat-message_content, .s-chat-message__mod .s-chat-message_timestamp {&#10;color: #000;&#10;}&#10;#fra_chatContainer .channelMenu .channelSwitcher {&#10;color: #${fc1};&#10;}&#10;#fra_chatContainer .channelMenu .channelSwitcher:hover, #fra_chatContainer .channelMenu .channelSwitcher:focus {&#10;background: #${pc2};&#10;color: #${fc1};&#10;}&#10;#fra_chatContainer .channelMenu .channelSwitcher.active {&#10;background: #${pc3};&#10;color: #${fc1};&#10;}&#10;/* settings text (DO NOT CHANGE OR IT WILL BREAK) */&#10;#fra_chatContainer label {&#10;color: #000;&#10;}&#10;/* char count */&#10;#lblCharacterCounter {&#10;color: #${fc1} !important;&#10;}&#10;/* code of conduct & chat room link */&#10;a[href$='./code.php'], a[href$='./chat.php'] {&#10;color: #${fc1};&#10;}`

    return chatText
}

// media queries
function media(bgColor, mImg, boxType) {
    const mediaText = `@media (max-width: 993px) {&#10;.dynastylist {&#10;margin-bottom: 15px;&#10;}&#10;}&#10;@media (max-width: 768px) {&#10;body {&#10;${(mImg != '') ? `background: #${bgColor} url('${mImg}') fixed;&#10;` : ''}background-position-y: center;&#10;background-position-x: center;&#10;/* DON'T CHANGE BELOW */&#10;background-repeat: no-repeat;&#10;background-size: cover;&#10;width: auto !important;&#10;min-width: 600px;&#10;}&#10;.main, .topbar {&#10;box-shadow: none !important;&#10;}&#10;#fraProfileContent.hidden-xs {&#10;display: block !important;&#10;}&#10;.breadcrumb::after {&#10;right: 22% !important;&#10;}&#10;${(boxType == '1') ? `.bigBox {&#10;height: 150px !important;&#10;}&#10;.scrollBox {&#10;height: 150px !important;&#10;}&#10;.bigBox:hover, .scrollBox:hover {&#10;height: 150px !important;&#10;}&#10;` : ''}}&#10;@media (max-width: 684px) {&#10;div.lionImage.featured-lion > div {&#10;height: 475px !important;&#10;}&#10;}&#10;@media (max-width: 620px) {&#10;div.lionImage.featured-lion > div {&#10;height: 450px !important;&#10;}&#10;}`

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
    let primaryTwo = gID('primary-two').value
    let primaryThree = gID('primary-three').value
    let primaryFour = gID('primary-four').value

    let secondaryOne = gID('secondary-one').value
    if (secondaryOne == '') {
        secondaryOne = primaryOne
    }
    let secondaryTwo = gID('secondary-two').value
    if (secondaryTwo == '') {
        secondaryTwo = primaryTwo
    }
    let secondaryThree = gID('secondary-three').value
    if (secondaryThree == '') {
        secondaryThree = primaryThree
    }
    let secondaryFour = gID('secondary-four').value
    if (secondaryFour == '') {
        secondaryFour = primaryFour
    }

    let tertiary = gID('tertiary').value

    // border info
    let borderRound = gID('border-check').checked
    let borderStyle = gID('border-style').value
    let borderWidth = gID('border-width').value
    let borderColor = gID('border-color').value
    let border = ''
    if (borderStyle == '' || borderWidth == '' || borderColor == '') {
        border = 'none'
    } else {
        border = `${borderWidth}px ${borderStyle} #${borderColor}`
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
    let button2 = gID('button2').value
    let button3 = gID('button3').value
    let button4 = gID('button4').value
    let button5 = gID('button5').value
    let button6 = gID('button6').value
    let buttonText = gID('button-text').value
    let buttonTextShade = gID('button-text-check').checked
    if (buttonText == '') {
        buttonText = fontPrimary
        buttonTextShade = textCheck
    }
    let redButton1 = gID('red-button1').value
    let redButton2 = gID('red-button2').value
    let redButton3 = gID('red-button3').value
    let redButton4 = gID('red-button4').value
    let redButton5 = gID('red-button5').value
    let redButton6 = gID('red-button6').value
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
    const bodyText = body(fc1, fc2, fontMain, fontMainType, fontHead, fontHeadType, bgColor, bgImage) // no box-shadow
    const topbarText = topbar(fc1, fc2, pc1, border, br, shc)
    const navbarText = navbar(fc1, fc2, fontHead, fontHeadType, pc1, pc2, pc3, border, bc, br, logo) // no box-shadow
    const mainText = main(bgColor, border, br, shc)
    const breadcrumbText = breadcrumb(fc1, fc3, pc3, border, br, shc)
    const sidebarText = sidebar(fc1, pc3, border, br, shc)
    const progressText = progressBar(fontMain, fontMainType) // no box-shadow
    const alertText = alertBars(fc1, border, br, redBG, redLink, greenBG, greenLink, yellowBG, yellowLink, shc)
    const htmlText = htmlBox(fc1, pc3, border, br, boxType, popUp, plainBox, shc)
    const commentText = comments(pc1, pc2, pc3, pc4, border, shc)
    const tableText = tables(fc1, fc2, fontHead, fontHeadType, sc1, sc2, sc3, sc4, tc, border, tbr, kingHov, kingStyle, kingHovStyle, shc)
    const clanText = clanDesc(pc4, border, shc)
    const caveText = caves(fc1, fc2, tc, border, br, cave, pride, mound, shc)
    const featuredLionText = featuredLion(fc1, fc2, sc1, border, bc, br, fLion, shc)
    const moundText = mounds(sc1, border, br, shc)
    const featureText = featureStyle(fc1, sc4, border, br, shc)
    const dynastyText = dynasties(fc1, fc2, tc, border, br, dynasty, shc)
    const branchText = branch(fc1, sc2, sc3, border) // no box-shadow
    const buttonText = buttons(fontMain, fontMainType, br, b1, b2, b3, b4, b5, b6, bText, bTextShade, rb1, rb2, rb3, rb4, rb5, rb6, rbText, rbTextShade) // no box-shadow
    const eventText = eventFlavor(event) // no box-shadow
    const footerText = footer(fc1, fc2, tCheck) // no box-shadow
    const chatText = chat(fc1, fc2, tCheck, pc1, pc2, pc3, pc4, sc1, sc4, border, bc) // no box-shadow (gets cut off)
    const mediaText = media(bgColor, mImg, boxType) // no box-shadow

    finalCode.innerHTML = `<div class="d-flex justify-content-between align-items-end"><label class="form-label fs-3 fw-medium" for="code-box">Your Code:</label><button onclick="copyButton()" class="btn btn-primary mb-3">Copy Code</button></div><textarea name="copy-field" class="form-control copy-field" id="code-box">/*&#10;This layout was made by thystle (#14796) using a template made by Chris (#105465).&#10;Please do not copy, reproduce or edit this code in any way. Template is not for public use.&#10;*/&#10;&#10;/* font import */&#10;${font}&#10;&#10;/* Body */&#10;${bodyText}&#10;&#10;/* Topbar */&#10;${topbarText}&#10;&#10;/* Navbar */&#10;${navbarText}&#10;&#10;/* main */&#10;${mainText}&#10;&#10;/* Breadcrumb */&#10;${breadcrumbText}&#10;&#10;/* Side Bar */&#10;${sidebarText}&#10;&#10;/* Progress Bars */&#10;${progressText}&#10;&#10;/* alerts */&#10;${alertText}&#10;&#10;/* HTML Boxes if applicable */&#10;${htmlText}&#10;&#10;/* comment box */&#10;${commentText}&#10;&#10;/* tables */&#10;${tableText}&#10;&#10;/* CLAN STUFF */&#10;${clanText}&#10;&#10;/* Caves and Mounds Main */&#10;${caveText}&#10;&#10;/* featured lion section */&#10;${featuredLionText}&#10;&#10;/* Inner Mounds */&#10;${moundText}&#10;&#10;/* Feature Styling (like feed all play all etc.) */&#10;${featureText}&#10;&#10;/* Dynasty Pills */&#10;${dynastyText}&#10;&#10;/* Branch */&#10;${branchText}&#10;&#10;/* Buttons */&#10;${buttonText}&#10;&#10;/* Event Flavor Text */&#10;${eventText}&#10;&#10;/* Footer */&#10;${footerText}&#10;&#10;/*#region Chat */&#10;${chatText}/*#endregion */&#10;&#10;/* Media Query Adjustments */&#10;${mediaText}</textarea>`
}

function copyButton() {
    var copyText = gID('code-box')

    copyText.select()

    navigator.clipboard.writeText(copyText.value)

    alert(`Copied your code for you! :D`)
}
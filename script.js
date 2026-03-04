 const stripedshirtbutton = document.querySelector("#stripedshirtbutton");
 const tanktopbutton = document.querySelector("#tanktopbutton");
 const plaidtopbutton = document.querySelector("#plaidtopbutton");
 const jeansbutton = document.querySelector("#jeansbutton");
 const plaidskirtbutton = document.querySelector("#plaidskirtbutton");
 const longskirtbutton = document.querySelector("#longskirtbutton");
 const blueshoesbutton = document.querySelector("#blueshoesbutton");
 const beigeshoesbutton = document.querySelector("#beigeshoesbutton");
 const whiteshoesbutton = document.querySelector("#whiteshoesbutton");
 const resetbutton = document.querySelector("#resetbutton");

            function hideAllshirts() {
                stripedshirt.setAttribute ("visible", false);
                tanktop.setAttribute ("visible", false);
                plaidtop.setAttribute ("visible", false);
            }

            function showstripedshirt() {
                hideAllshirts()
                stripedshirt.setAttribute("visible", true);
            }

            function showtanktop() {
                hideAllshirts()
                tanktop.setAttribute("visible", true);
            }

            function showplaidtop() {
                hideAllshirts()
                plaidtop.setAttribute("visible", true);
            }

            function hideAllpants() {
                jeans.setAttribute ("visible", false);
                plaidskirt.setAttribute ("visible", false);
                longskirt.setAttribute ("visible", false);
            }

            function showjeans() {
                hideAllpants()
                jeans.setAttribute("visible", true);
            }

            function showplaidskirt() {
                hideAllpants()
                plaidskirt.setAttribute("visible", true);
            }

            function showlongskirt() {
                hideAllpants()
                longskirt.setAttribute("visible", true);
            }

            function hideAllshoes() {
                blueshoes.setAttribute ("visible", false);
                beigeshoes.setAttribute ("visible", false);
                whiteshoes.setAttribute ("visible", false);
            }

            function showblueshoes() {
                hideAllshoes()
                blueshoes.setAttribute("visible", true);
            }

            function showbeigeshoes() {
                hideAllshoes()
                beigeshoes.setAttribute("visible", true);
            }

            function showwhiteshoes() {
                hideAllshoes()
                whiteshoes.setAttribute("visible", true);
            }

            function resetclothes() {
                hideAllshirts()
                hideAllpants()
                hideAllshoes()
            }

function loadbody() {
  loader = setTimeout(showPage, 3000);
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("myDiv").style.display = "block";
}
  
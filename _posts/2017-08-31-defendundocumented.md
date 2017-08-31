---
layout: petition-page
permalink: /defendundocumented/
title: "Sign the Pledge to #DefendUndocumented"
category: campaigns
featured-image: '/static/images/featured/2017-08-31-defendundocumented.png'
blurb: "Our undocumented community is under attack. Pledge your solidarity."
---

<link href='https://actionnetwork.org/css/style-embed-whitelabel.css' rel='stylesheet' type='text/css' /><script src='https://actionnetwork.org/widgets/v2/petition/sign-the-pledge-to-defendundocumented?format=js&source=widget&style=full'></script><div id='can-petition-area-sign-the-pledge-to-defendundocumented' style='width: 100%'><!-- this div is the target for our HTML insertion --></div>

<script>
      $(document).ready(function() {
	    $('#can-petition-area-sign-the-pledge-to-defendundocumented').on('can_embed_loaded', function() {
	        document.getElementsByName("commit")[0].value = "Pledge!";
	  	    $(".action_sidebar h4").text("Take Action");
	  	    var str = document.getElementsByClassName("action_status_running_total")[0].innerHTML;
	  	    var txt = str.replace("Signatures Collected", "Pledges Collected");
		      document.getElementsByClassName("action_status_running_total")[0].innerHTML = txt;
	      });
      });
</script>

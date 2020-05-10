package help.mv;

import android.os.Bundle;

import com.getcapacitor.BridgeActivity;
import com.getcapacitor.Plugin;

import java.util.ArrayList;

import com.codetrixstudio.capacitor.GoogleAuth.GoogleAuth;
import com.facebook.FacebookSdk;
import com.facebook.appevents.AppEventsLogger;

public class MainActivity extends BridgeActivity {
  @Override
  public void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);

    // Initializes the Bridge
    this.init(savedInstanceState, new ArrayList<Class<? extends Plugin>>() {
      {
        // Additional plugins you've installed go here
        // Ex: add(TotallyAwesomePlugin.class);
        add(GoogleAuth.class);
        add(jp.rdlabo.capacitor.plugin.facebook.FacebookLogin.class);

      }
    });
  }
}

<script lang="ts">
  import { browser } from '$app/environment'
  import type { NotifyPropertyChange, EventToInApp } from "@flutter-preview/webview";

  const properties: {[key: string]: string} = {};

  if (browser) {
    window.addEventListener('message', (event) => {
      const payload = event.data as EventToInApp;
      switch(payload.event){
        case '@inapp/property-change':{
          const data = payload as NotifyPropertyChange;
          const {key, value} = data;
          properties[key] = value;
          break;
        }
      }
    });
  }

</script>

<h1>Demo Embedded InApp</h1>
<pre>
  <code>
    {JSON.stringify(properties, null, 2)}
  </code>
</pre>
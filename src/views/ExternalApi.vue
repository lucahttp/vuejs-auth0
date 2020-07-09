<template>
  <div>
    <div class="mb-5">
      <h1>External API</h1>
      <p>
        Call an external API by clicking the button below. This will call the external API using an access token, and the API will validate it using
        the API's audience value.
      </p>

      <button class="btn btn-primary mt-5" @click="callApi">Call API</button>
    </div>

    <div class="result-block-container">
      <div :class="['result-block', executed ? 'show' : '']">
        <h6 class="muted">Result</h6>
        <pre v-highlightjs="JSON.stringify(apiMessage, null, 2)">
          <code class="js rounded"></code>
        </pre>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Api",
  data() {
    return {
      apiMessage: null,
      executed: false
    };
  },
  methods: {
    async callApi() {
      //const accessToken = await this.$auth.getTokenSilently();
      //console.log(accessToken);

      var axios = require('axios');

      var config = {
        method: 'get',
        url: 'https://api.ipify.org',
        headers: { }
      };

      axios(config)
      .then(function (response) {
        //console.log(JSON.stringify(response.data));
        this.apiMessage = JSON.stringify(response.data);

      })
      .catch(function (error) {
        //console.log(error);
        this.apiMessage = error;
      });

    }
    /*
    async callApi() {
      const accessToken = await this.$auth.getTokenSilently();
      console.log(accessToken);

      try {
        const { data } = await this.$http.get("https://flask-cotizacion-dolar.azurewebsites.net/cotizacion-ccl?cotizacion=compra", {
          headers: {
            Authorization: `Bearer ${accessToken}`
          }
        });

        this.apiMessage = data;
        this.executed = true;
      } catch (e) {
        this.apiMessage = `Error: the server responded with '${e.response.status}: ${e.response.statusText}'`;
      }
    }
*/
  }
};

/*
    async callApi() {
      const accessToken = await this.$auth.getTokenSilently();
      console.log(accessToken);

      try {
        const { data } = await this.$http.get("https://flask-cotizacion-dolar.azurewebsites.net/cotizacion-ccl?cotizacion=compra", {
          headers: {
            Authorization: `Bearer ${accessToken}`
          }
        });

        this.apiMessage = data;
        this.executed = true;
      } catch (e) {
        this.apiMessage = `Error: the server responded with '${e.response.status}: ${e.response.statusText}'`;
      }
    }
  }
};
    */
/*
    async callApi() {
      //const accessToken = await this.$auth.getTokenSilently();
      //console.log(accessToken);
      try {
        var axios = require("axios");
        var data;

        var config = {
          method: "get",
          url:
            "https://flask-cotizacion-dolar.azurewebsites.net/cotizacion-ccl?cotizacion=compra"
          }
        };

        axios(config)
          .then(function(response) {
            console.log(JSON.stringify(response.data));
            //this.data = JSON.stringify(response.data);
            data = JSON.stringify(response.data);
          })
          .catch(function(error) {
            console.log(error);
            console.log(error);
          });

        this.apiMessage = data;
        this.executed = true;
      } catch (e) {
        this.apiMessage = `Error: the server responded with '${e.response.status}: ${e.response.statusText}'`;
      }
    }
  }
};
*/
</script>

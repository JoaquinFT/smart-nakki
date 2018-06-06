function getTwitterOAuthURL() {
        $.ajax({
          dataType: "json",
          url: "http://localhost:8000/social/twitter/get_oauth_url",
          data: {
            'public_address': web3.eth.accounts[0],
            'user_type': 1,
          },
          success: function(data) {
                        window.location.href=data.oauth_url;
                    }
        });
  }
function getLinkedinOAuthURL() {
        $.ajax({
          dataType: "json",
          url: "http://localhost:8000/social/linkedin/get_oauth_url",
          data: {
            'public_address': web3.eth.accounts[0],
            'user_type': 1,
          },
          success: function(data) {
                        window.location.href=data.oauth_url;
                    }
        });
  }
function getMediumOAuthURL() {
          $.ajax({
            dataType: "json",
            url: "http://localhost:8000/social/medium/get_oauth_url",
            data: {
              'public_address': web3.eth.accounts[0],
              'user_type': 1,
            },
            success: function(data) {
                          window.location.href=data.oauth_url;
                      }
          });
    }

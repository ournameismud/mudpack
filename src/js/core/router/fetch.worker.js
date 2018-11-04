let controller;

// eslint-disable-next-line no-restricted-globals
self.addEventListener(
  'message',
  e => {
    if (typeof controller === 'undefined') {
      controller = new AbortController();
    }

    if (e.data === 'cancel') {
      controller.abort();
      controller = undefined;
    } else {
      const { link } = e.data;
      new Promise((resolve, reject) => {
        const signal = controller.signal;

        fetch(link, { signal })
          .then(response => {
            const { ok, status, url } = response;

            if (ok) {
              return response.text();
            }
            // eslint-disable-next-line prefer-promise-reject-errors
            reject({ ok, status, url });
            return false;
          })
          .then((...args) => {
            if (args) {
              const data = args[0].data ? { ...args[0].data } : args[0];

              resolve();
              self.postMessage([{ key: link, data }]); // eslint-disable-line no-restricted-globals
            }
          })
          .catch(() => {
            console.log('abort request'); // eslint-disable-line
          });
      }).catch(() => ({
        key: link,
        data: false
      }));
    }
  },
  false
);

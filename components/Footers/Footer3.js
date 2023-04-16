import React from 'react'

const Footer3 = () => {
  return (
    <>
      <div class="w-full min-h-screen flex items-center justify-center bg-black">
        <div class="md:w-2/3 w-full px-4 text-white flex flex-col">
          <div class="w-full text-7xl font-bold">
            <h1 class="w-full md:w-2/3">How can we help you. get
              in touch</h1>
          </div>
          <div class="flex mt-8 flex-col md:flex-row md:justify-between">
            <p class="w-full md:w-2/3 text-gray-400">To ensure that all Wikipedia content is verifiable, anyone may question an uncited claim. If your work has been tagged</p>
            <div class="w-44 pt-6 md:pt-0">
              <a class="bg-red-500 justify-center text-center rounded-lg shadow px-10 py-3 flex items-center">Contact US</a>
            </div>
          </div>
          <div class="flex flex-col">
            <div class="flex mt-24 mb-12 flex-row justify-between">
              <div class="">
                <svg width="84" height="25" viewBox="0 0 84 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8.86255 12.3906C8.73755 12.3906 8.56567 12.4479 8.34692 12.5625C8.13859 12.6667 7.88338 12.8542 7.5813 13.125C7.28963 13.3958 6.9563 13.7604 6.5813 14.2188C6.21672 14.6667 5.81567 15.2396 5.37817 15.9375C5.28442 16.625 5.2063 17.2396 5.1438 17.7812C5.09172 18.3229 5.06567 18.75 5.06567 19.0625C5.06567 19.3333 5.1438 19.6094 5.30005 19.8906C5.4563 20.1615 5.64901 20.4062 5.87817 20.625C6.10734 20.8438 6.34172 21.026 6.5813 21.1719C6.8313 21.3177 7.04484 21.3958 7.22192 21.4062C7.65942 21.4375 8.03963 21.349 8.36255 21.1406C8.68547 20.9323 8.97713 20.6406 9.23755 20.2656C9.43547 19.9844 9.60734 19.6562 9.75317 19.2812C9.89901 18.8958 10.0188 18.5 10.1125 18.0938C10.2063 17.6875 10.274 17.2812 10.3157 16.875C10.3573 16.4583 10.3782 16.0729 10.3782 15.7188C10.3782 15.2396 10.3469 14.7969 10.2844 14.3906C10.2219 13.9844 10.123 13.6354 9.98755 13.3438C9.86255 13.0417 9.7063 12.8073 9.5188 12.6406C9.3313 12.474 9.11255 12.3906 8.86255 12.3906ZM14.5032 14.4688C14.4823 15.5729 14.2219 16.6927 13.7219 17.8281C13.2323 18.9635 12.5917 20.0417 11.8 21.0625C11.4355 21.5312 11.0188 21.9844 10.55 22.4219C10.0917 22.849 9.58651 23.2292 9.03442 23.5625C8.49276 23.8854 7.91463 24.1458 7.30005 24.3438C6.68547 24.5417 6.05005 24.6406 5.3938 24.6406C5.15422 24.6406 4.87297 24.5833 4.55005 24.4688C4.22713 24.3542 3.8938 24.1979 3.55005 24C3.21672 23.8021 2.88338 23.5625 2.55005 23.2812C2.21672 23 1.91984 22.6927 1.65942 22.3594C1.39901 22.026 1.18547 21.6719 1.0188 21.2969C0.852132 20.9219 0.768799 20.5365 0.768799 20.1406C0.768799 19.8698 0.79484 19.4688 0.846924 18.9375C0.909424 18.3958 0.987549 17.776 1.0813 17.0781C1.18547 16.3802 1.30005 15.625 1.42505 14.8125C1.55005 13.9896 1.68026 13.1562 1.81567 12.3125C1.95109 11.4688 2.0813 10.6354 2.2063 9.8125C2.34172 8.97917 2.4563 8.20312 2.55005 7.48438C2.65422 6.75521 2.73755 6.10938 2.80005 5.54688C2.86255 4.98438 2.8938 4.54167 2.8938 4.21875C2.8938 3.97917 2.86776 3.79167 2.81567 3.65625C2.76359 3.51042 2.69588 3.40625 2.61255 3.34375C2.52922 3.27083 2.44067 3.22396 2.34692 3.20312C2.25317 3.18229 2.15942 3.17188 2.06567 3.17188C1.97192 3.17188 1.84172 3.19792 1.67505 3.25C1.5188 3.29167 1.36776 3.33854 1.22192 3.39062C1.03442 3.45312 0.846924 3.52083 0.659424 3.59375L0.378174 2.35938C0.85734 2.13021 1.40422 1.89062 2.0188 1.64062C2.6438 1.39062 3.25317 1.16146 3.84692 0.953125C4.44067 0.744792 4.97713 0.578125 5.4563 0.453125C5.94588 0.317708 6.29484 0.25 6.50317 0.25C6.86776 0.25 7.11255 0.34375 7.23755 0.53125C7.36255 0.71875 7.42505 1.05208 7.42505 1.53125C7.42505 1.96875 7.37817 2.57812 7.28442 3.35938C7.19067 4.13021 7.07088 5.00521 6.92505 5.98438C6.78963 6.95312 6.63338 7.98438 6.4563 9.07812C6.27922 10.1615 6.10734 11.2292 5.94067 12.2812C6.45109 11.6667 6.93026 11.1719 7.37817 10.7969C7.83651 10.4115 8.26359 10.1146 8.65942 9.90625C9.05526 9.69792 9.42505 9.55729 9.7688 9.48438C10.1125 9.41146 10.425 9.375 10.7063 9.375C11.2375 9.36458 11.7323 9.47396 12.1907 9.70312C12.6594 9.92188 13.0657 10.25 13.4094 10.6875C13.7532 11.1146 14.024 11.6458 14.2219 12.2812C14.4198 12.9167 14.5136 13.6458 14.5032 14.4688Z" fill="white" />
                  <path d="M28.2769 12.125C28.2769 12.4062 28.2405 12.7135 28.1675 13.0469C28.105 13.3698 27.9696 13.7135 27.7613 14.0781C27.5634 14.4323 27.2769 14.8073 26.9019 15.2031C26.5269 15.599 26.0269 16.0052 25.4019 16.4219C24.7769 16.8385 24.0113 17.2656 23.105 17.7031C22.1988 18.1406 21.1155 18.5833 19.855 19.0312C20.0009 19.9792 20.2665 20.7188 20.6519 21.25C21.0373 21.7708 21.48 22.0312 21.98 22.0312C22.428 22.0312 23.079 21.8021 23.9332 21.3438C24.7978 20.8854 25.8603 20.151 27.1207 19.1406C27.1832 19.1719 27.2561 19.25 27.3394 19.375C27.4228 19.4896 27.5009 19.6198 27.5738 19.7656C27.6571 19.901 27.73 20.0312 27.7925 20.1562L27.9175 20.4062C27.0634 21.1458 26.2821 21.7865 25.5738 22.3281C24.8655 22.8594 24.2092 23.2969 23.605 23.6406C23.0009 23.9844 22.4332 24.2344 21.9019 24.3906C21.3811 24.5573 20.8759 24.6406 20.3863 24.6406C19.928 24.6406 19.4228 24.5417 18.8707 24.3438C18.3186 24.1562 17.803 23.8542 17.3238 23.4375C16.855 23.0104 16.4592 22.4583 16.1363 21.7812C15.8238 21.0938 15.6675 20.2552 15.6675 19.2656C15.6675 18.4531 15.7665 17.6823 15.9644 16.9531C16.1623 16.2135 16.4436 15.5156 16.8082 14.8594C17.1728 14.1927 17.6103 13.5625 18.1207 12.9688C18.6415 12.375 19.2248 11.8021 19.8707 11.25C20.0998 11.0521 20.3915 10.8438 20.7457 10.625C21.0998 10.4062 21.4853 10.2031 21.9019 10.0156C22.329 9.82812 22.7665 9.67708 23.2144 9.5625C23.6728 9.4375 24.1207 9.375 24.5582 9.375C25.1936 9.375 25.7457 9.45833 26.2144 9.625C26.6832 9.78125 27.0686 9.98958 27.3707 10.25C27.6832 10.5104 27.9123 10.8073 28.0582 11.1406C28.204 11.4635 28.2769 11.7917 28.2769 12.125ZM21.2613 12.7188C21.0321 13.0208 20.829 13.3281 20.6519 13.6406C20.4853 13.9427 20.3394 14.2656 20.2144 14.6094C20.0894 14.9531 19.9905 15.3229 19.9175 15.7188C19.8446 16.1146 19.7978 16.5521 19.7769 17.0312C20.6936 16.5938 21.4228 16.2031 21.9644 15.8594C22.5165 15.5052 22.9332 15.1719 23.2144 14.8594C23.5061 14.5469 23.6936 14.2396 23.7769 13.9375C23.8603 13.6354 23.9019 13.3177 23.9019 12.9844C23.9019 12.5573 23.8082 12.2292 23.6207 12C23.4332 11.7604 23.204 11.6406 22.9332 11.6406C22.8498 11.6406 22.7405 11.6667 22.605 11.7188C22.4696 11.7708 22.3238 11.8438 22.1675 11.9375C22.0113 12.0312 21.8498 12.1458 21.6832 12.2812C21.5269 12.4062 21.3863 12.5521 21.2613 12.7188Z" fill="white" />
                  <path d="M41.3007 10.8125C41.134 11.0521 40.9309 11.3281 40.6913 11.6406C40.4621 11.9427 40.2278 12.2344 39.9882 12.5156C39.759 12.7969 39.5403 13.0365 39.3319 13.2344C39.1236 13.4219 38.9621 13.5156 38.8475 13.5156C38.6705 13.5156 38.4725 13.401 38.2538 13.1719C38.035 12.9427 37.785 12.6927 37.5038 12.4219C37.233 12.1406 36.9361 11.8854 36.6132 11.6562C36.2903 11.4271 35.9361 11.3125 35.5507 11.3125C34.9673 11.3125 34.5559 11.4479 34.3163 11.7188C34.0767 11.9792 33.9569 12.3281 33.9569 12.7656C33.9569 13.026 34.0142 13.2656 34.1288 13.4844C34.2434 13.6927 34.41 13.8958 34.6288 14.0938C34.858 14.2812 35.134 14.4688 35.4569 14.6562C35.7903 14.8438 36.1653 15.0469 36.5819 15.2656C37.009 15.4844 37.4257 15.724 37.8319 15.9844C38.2486 16.2448 38.6132 16.5469 38.9257 16.8906C39.2486 17.224 39.509 17.6042 39.7069 18.0312C39.9048 18.4479 40.0038 18.9323 40.0038 19.4844C40.0038 19.9635 39.8944 20.4271 39.6757 20.875C39.4673 21.3125 39.1809 21.724 38.8163 22.1094C38.4517 22.4844 38.0298 22.8281 37.5507 23.1406C37.0819 23.4531 36.5923 23.724 36.0819 23.9531C35.5715 24.1719 35.0559 24.3385 34.535 24.4531C34.0142 24.5781 33.5298 24.6406 33.0819 24.6406C32.3632 24.6406 31.7017 24.5521 31.0975 24.375C30.4934 24.1979 29.9725 23.9844 29.535 23.7344C29.0975 23.474 28.759 23.2031 28.5194 22.9219C28.2694 22.6302 28.1444 22.375 28.1444 22.1562C28.1444 22 28.2225 21.75 28.3788 21.4062C28.535 21.0521 28.7173 20.6927 28.9257 20.3281C29.1444 19.9635 29.358 19.6458 29.5663 19.375C29.7746 19.0938 29.9361 18.9531 30.0507 18.9531C30.1444 18.9531 30.2486 19.0417 30.3632 19.2188C30.4778 19.3958 30.608 19.6146 30.7538 19.875C30.91 20.1354 31.0819 20.4219 31.2694 20.7344C31.4673 21.0469 31.6965 21.3333 31.9569 21.5938C32.2278 21.8542 32.5298 22.0729 32.8632 22.25C33.1965 22.4271 33.5819 22.5156 34.0194 22.5156C34.6757 22.5156 35.1809 22.349 35.535 22.0156C35.8996 21.6823 36.0819 21.2344 36.0819 20.6719C36.0819 20.3281 35.9882 20.0104 35.8007 19.7188C35.6236 19.4167 35.384 19.1354 35.0819 18.875C34.7798 18.6146 34.4361 18.375 34.0507 18.1562C33.6757 17.9271 33.2955 17.7083 32.91 17.5C32.358 17.2188 31.8996 16.9323 31.535 16.6406C31.1809 16.3385 30.8996 16.0365 30.6913 15.7344C30.483 15.4219 30.3371 15.1042 30.2538 14.7812C30.1705 14.4583 30.1288 14.1302 30.1288 13.7969C30.1288 13.1406 30.3319 12.5417 30.7382 12C31.1444 11.4583 31.6548 10.9948 32.2694 10.6094C32.884 10.2135 33.5559 9.91146 34.285 9.70312C35.0246 9.48438 35.7225 9.375 36.3788 9.375C36.9413 9.375 37.4465 9.44271 37.8944 9.57812C38.3528 9.70312 38.7746 9.84896 39.16 10.0156C39.5455 10.1719 39.91 10.3281 40.2538 10.4844C40.5975 10.6406 40.9465 10.75 41.3007 10.8125Z" fill="white" />
                  <path d="M57.8244 22.0938C57.3557 22.375 56.84 22.6667 56.2775 22.9688C55.7255 23.2708 55.1786 23.5469 54.6369 23.7969C54.1057 24.0365 53.6057 24.2344 53.1369 24.3906C52.6786 24.5573 52.3088 24.6406 52.0275 24.6406C51.663 24.6406 51.3505 24.474 51.09 24.1406C50.84 23.8177 50.715 23.375 50.715 22.8125C50.715 22.625 50.7463 22.3177 50.8088 21.8906C50.8713 21.4635 50.9494 20.974 51.0432 20.4219C51.1369 19.8698 51.2359 19.2865 51.34 18.6719C51.4442 18.0573 51.5432 17.4688 51.6369 16.9062C51.7307 16.3333 51.8088 15.8177 51.8713 15.3594C51.9338 14.901 51.965 14.5521 51.965 14.3125C51.965 13.75 51.9182 13.3594 51.8244 13.1406C51.7411 12.9219 51.5484 12.8125 51.2463 12.8125C51.1109 12.8125 50.9338 12.8438 50.715 12.9062C50.4963 12.9688 50.2567 13.0781 49.9963 13.2344C49.7359 13.3906 49.4598 13.6094 49.1682 13.8906C48.8869 14.1615 48.6109 14.5104 48.34 14.9375C48.0275 15.4375 47.7828 16.0365 47.6057 16.7344C47.439 17.4323 47.2671 18.2865 47.09 19.2969C47.0067 19.7656 46.939 20.1719 46.8869 20.5156C46.8348 20.849 46.7932 21.151 46.7619 21.4219C46.7411 21.6823 46.7255 21.9271 46.715 22.1562C46.715 22.375 46.7203 22.599 46.7307 22.8281C46.6369 22.8802 46.4859 22.9531 46.2775 23.0469C46.0796 23.1406 45.8453 23.25 45.5744 23.375C45.314 23.4896 45.038 23.6146 44.7463 23.75C44.4546 23.875 44.1734 23.9948 43.9025 24.1094C43.6421 24.224 43.4078 24.3281 43.1994 24.4219C43.0015 24.526 42.8609 24.599 42.7775 24.6406L42.1057 24C42.3244 22.9583 42.5275 21.8906 42.715 20.7969C42.913 19.6927 43.0848 18.651 43.2307 17.6719C43.3869 16.6823 43.5067 15.8073 43.59 15.0469C43.6838 14.276 43.7307 13.7083 43.7307 13.3438C43.7307 13.1042 43.715 12.9167 43.6838 12.7812C43.663 12.6354 43.6265 12.5312 43.5744 12.4688C43.5223 12.3958 43.4598 12.349 43.3869 12.3281C43.314 12.3073 43.2307 12.2969 43.1369 12.2969C43.0432 12.2969 42.913 12.3177 42.7463 12.3594C42.5796 12.401 42.413 12.4479 42.2463 12.5C42.0588 12.5625 41.8505 12.6302 41.6213 12.7031L41.3088 11.4688C41.6005 11.3438 41.9338 11.2031 42.3088 11.0469C42.6942 10.8906 43.09 10.7396 43.4963 10.5938C43.9025 10.4375 44.3088 10.2865 44.715 10.1406C45.1213 9.99479 45.4963 9.86458 45.84 9.75C46.1942 9.63542 46.4963 9.54688 46.7463 9.48438C47.0067 9.41146 47.1942 9.375 47.3088 9.375C47.4546 9.375 47.5744 9.40104 47.6682 9.45312C47.7723 9.49479 47.8505 9.57812 47.9025 9.70312C47.965 9.82812 48.0067 10.0052 48.0275 10.2344C48.0588 10.4635 48.0744 10.7656 48.0744 11.1406C48.0744 11.3594 48.0692 11.5729 48.0588 11.7812C48.0484 11.9792 48.0275 12.2083 47.9963 12.4688C49.1317 11.4271 50.2463 10.651 51.34 10.1406C52.4338 9.63021 53.4494 9.375 54.3869 9.375C54.7098 9.375 55.0015 9.40625 55.2619 9.46875C55.5223 9.53125 55.7411 9.65104 55.9182 9.82812C56.1057 9.99479 56.2463 10.2396 56.34 10.5625C56.4338 10.875 56.4807 11.2812 56.4807 11.7812C56.4807 12.1458 56.4494 12.5729 56.3869 13.0625C56.3244 13.5521 56.2411 14.0729 56.1369 14.625C56.0432 15.1667 55.939 15.724 55.8244 16.2969C55.7098 16.8698 55.6005 17.4167 55.4963 17.9375C55.4025 18.4583 55.3244 18.9427 55.2619 19.3906C55.1994 19.8281 55.1682 20.1927 55.1682 20.4844C55.1682 20.8385 55.215 21.0833 55.3088 21.2188C55.4025 21.3438 55.5432 21.4062 55.7307 21.4062C55.8557 21.4062 55.9703 21.3958 56.0744 21.375C56.1786 21.3542 56.288 21.3229 56.4025 21.2812C56.5171 21.2396 56.6473 21.1875 56.7932 21.125C56.9494 21.0625 57.1369 20.9844 57.3557 20.8906L57.8244 22.0938Z" fill="white" />
                  <path d="M66.6451 22.0938C66.1555 22.3854 65.6346 22.6823 65.0826 22.9844C64.5409 23.2865 64.0044 23.5625 63.4732 23.8125C62.9523 24.0521 62.4628 24.25 62.0044 24.4062C61.5461 24.5625 61.1607 24.6406 60.8482 24.6406C60.494 24.6406 60.1867 24.474 59.9263 24.1406C59.6659 23.8177 59.5357 23.375 59.5357 22.8125C59.5357 22.5 59.5669 22.0885 59.6294 21.5781C59.7023 21.0573 59.7909 20.4896 59.8951 19.875C59.9992 19.2604 60.1138 18.625 60.2388 17.9688C60.3638 17.3125 60.4784 16.6875 60.5826 16.0938C60.6867 15.5 60.7701 14.9635 60.8326 14.4844C60.9055 13.9948 60.9419 13.625 60.9419 13.375C60.9419 13.1354 60.9263 12.9479 60.8951 12.8125C60.8638 12.6667 60.8221 12.5625 60.7701 12.5C60.718 12.4271 60.6503 12.3802 60.5669 12.3594C60.4836 12.3385 60.3951 12.3281 60.3013 12.3281C60.218 12.3281 60.0982 12.349 59.9419 12.3906C59.7857 12.4219 59.6294 12.4635 59.4732 12.5156C59.2857 12.5677 59.093 12.6302 58.8951 12.7031L58.5982 11.5C59.0357 11.3021 59.5461 11.0833 60.1294 10.8438C60.7232 10.5938 61.3065 10.3594 61.8794 10.1406C62.4628 9.92188 62.994 9.73958 63.4732 9.59375C63.9523 9.44792 64.3013 9.375 64.5201 9.375C64.8117 9.375 65.0409 9.47396 65.2076 9.67188C65.3846 9.86979 65.4732 10.2083 65.4732 10.6875C65.4732 10.9896 65.4367 11.401 65.3638 11.9219C65.2909 12.4427 65.1971 13.0156 65.0826 13.6406C64.9784 14.2552 64.8638 14.9062 64.7388 15.5938C64.6138 16.2708 64.494 16.9219 64.3794 17.5469C64.2753 18.1615 64.1867 18.7292 64.1138 19.25C64.0409 19.7708 64.0044 20.1823 64.0044 20.4844C64.0044 20.8073 64.0357 21.0417 64.0982 21.1875C64.1711 21.3333 64.2961 21.4062 64.4732 21.4062C64.6294 21.4062 64.7753 21.3958 64.9107 21.375C65.0461 21.3542 65.1815 21.3229 65.3169 21.2812C65.4628 21.2396 65.6138 21.1875 65.7701 21.125C65.9263 21.0625 66.1138 20.9844 66.3326 20.8906L66.6451 22.0938ZM66.9888 4.28125C66.9888 4.57292 66.9211 4.88021 66.7857 5.20312C66.6607 5.52604 66.468 5.82292 66.2076 6.09375C65.9576 6.36458 65.6451 6.58854 65.2701 6.76562C64.8951 6.94271 64.4628 7.03125 63.9732 7.03125C63.6607 7.03125 63.3898 6.99479 63.1607 6.92188C62.9315 6.83854 62.744 6.72917 62.5982 6.59375C62.4523 6.45833 62.343 6.30729 62.2701 6.14062C62.2076 5.97396 62.1763 5.80208 62.1763 5.625C62.1763 5.34375 62.2388 5.04167 62.3638 4.71875C62.4992 4.39583 62.6971 4.09896 62.9576 3.82812C63.218 3.54688 63.5305 3.31771 63.8951 3.14062C64.2701 2.95312 64.7023 2.85938 65.1919 2.85938C65.5044 2.85938 65.7753 2.90104 66.0044 2.98438C66.2336 3.06771 66.4211 3.17708 66.5669 3.3125C66.7128 3.4375 66.8169 3.58854 66.8794 3.76562C66.9523 3.93229 66.9888 4.10417 66.9888 4.28125Z" fill="white" />
                  <path d="M75.1532 1.85938C75.1532 2.26562 75.1219 2.77083 75.0594 3.375C74.9969 3.96875 74.9136 4.63542 74.8094 5.375C74.7157 6.11458 74.6011 6.90625 74.4657 7.75C74.3303 8.58333 74.1896 9.44271 74.0438 10.3281C73.898 11.2135 73.7469 12.1094 73.5907 13.0156C73.4448 13.9115 73.3042 14.7812 73.1688 15.625L75.5907 13.8438C76.3094 13.3125 76.8771 12.875 77.2938 12.5312C77.7209 12.1771 77.9813 11.901 78.075 11.7031C78.1688 11.4948 78.0959 11.3594 77.8563 11.2969C77.6271 11.224 77.2261 11.1979 76.6532 11.2188L76.5125 9.98438C76.9709 9.91146 77.4344 9.84375 77.9032 9.78125C78.3719 9.71875 78.825 9.66667 79.2625 9.625C79.7 9.57292 80.1167 9.53646 80.5125 9.51562C80.9084 9.48438 81.273 9.46875 81.6063 9.46875C82.2625 9.46875 82.7 9.56771 82.9188 9.76562C83.148 9.96354 83.2625 10.2396 83.2625 10.5938C83.2625 10.75 83.148 10.9635 82.9188 11.2344C82.7 11.4948 82.3719 11.8021 81.9344 12.1562C81.5073 12.5 80.9865 12.8906 80.3719 13.3281C79.7573 13.7552 79.0594 14.2083 78.2782 14.6875L76.2782 15.9219C76.5282 16.2031 76.773 16.5365 77.0125 16.9219C77.2625 17.2969 77.4969 17.6875 77.7157 18.0938C77.9448 18.5 78.1688 18.901 78.3875 19.2969C78.6063 19.6927 78.8198 20.0469 79.0282 20.3594C79.2469 20.6719 79.4553 20.9271 79.6532 21.125C79.8615 21.3125 80.0698 21.4062 80.2782 21.4062C80.5178 21.4062 80.825 21.3698 81.2 21.2969C81.5855 21.2135 81.9761 21.0625 82.3719 20.8438L82.95 22C82.6063 22.2917 82.2157 22.5938 81.7782 22.9062C81.3511 23.2083 80.924 23.4896 80.4969 23.75C80.0698 24 79.6688 24.2031 79.2938 24.3594C78.9188 24.526 78.6115 24.6094 78.3719 24.6094C78.0282 24.6094 77.6948 24.4583 77.3719 24.1562C77.049 23.8646 76.7313 23.4844 76.4188 23.0156C76.1167 22.5365 75.8146 22.0052 75.5125 21.4219C75.2209 20.8281 74.9292 20.2396 74.6375 19.6562C74.3563 19.0625 74.0803 18.5052 73.8094 17.9844C73.5386 17.4531 73.273 17.0156 73.0125 16.6719C72.898 17.4115 72.7938 18.1094 72.7 18.7656C72.6167 19.4219 72.549 20.0208 72.4969 20.5625C72.4553 21.0938 72.4292 21.5521 72.4188 21.9375C72.4188 22.3229 72.4448 22.6094 72.4969 22.7969C72.4032 22.849 72.2469 22.9219 72.0282 23.0156C71.8198 23.1094 71.5803 23.2188 71.3094 23.3438C71.0386 23.4688 70.7521 23.599 70.45 23.7344C70.148 23.8594 69.8615 23.9792 69.5907 24.0938C69.3303 24.2188 69.0959 24.3281 68.8875 24.4219C68.6792 24.526 68.5334 24.599 68.45 24.6406L67.7469 24C67.7886 23.6979 67.8615 23.2292 67.9657 22.5938C68.0698 21.9479 68.1896 21.1979 68.325 20.3438C68.4709 19.4792 68.6271 18.5417 68.7938 17.5312C68.9709 16.5104 69.1428 15.4688 69.3094 14.4062C69.4761 13.3438 69.6375 12.2969 69.7938 11.2656C69.9605 10.224 70.1063 9.25 70.2313 8.34375C70.3563 7.4375 70.4553 6.63021 70.5282 5.92188C70.6011 5.21354 70.6375 4.66146 70.6375 4.26562C70.6375 4.00521 70.6219 3.80208 70.5907 3.65625C70.5594 3.51042 70.5125 3.40104 70.45 3.32812C70.3875 3.25521 70.3094 3.21354 70.2157 3.20312C70.1219 3.18229 70.0125 3.17188 69.8875 3.17188C69.8042 3.17188 69.6792 3.19792 69.5125 3.25C69.3459 3.29167 69.174 3.33854 68.9969 3.39062C68.799 3.45312 68.5855 3.52083 68.3563 3.59375L68.0594 2.35938C68.4969 2.16146 69.023 1.94271 69.6375 1.70312C70.2625 1.45312 70.8771 1.22396 71.4813 1.01562C72.0959 0.796875 72.6532 0.614583 73.1532 0.46875C73.6636 0.322917 74.023 0.25 74.2313 0.25C74.3771 0.25 74.5073 0.265625 74.6219 0.296875C74.7365 0.328125 74.8303 0.401042 74.9032 0.515625C74.9865 0.619792 75.049 0.78125 75.0907 1C75.1323 1.20833 75.1532 1.49479 75.1532 1.85938Z" fill="white" />
                </svg>
              </div>
              <a class="hidden md:block cursor-pointer text-gray-600 hover:text-white uppercase">About</a>
              <a class="hidden md:block cursor-pointer text-gray-600 hover:text-white uppercase">Services</a>
              <a class="hidden md:block cursor-pointer text-gray-600 hover:text-white uppercase">Why us</a>
              <a class="hidden md:block cursor-pointer text-gray-600 hover:text-white uppercase">Contact</a>
              <div class="flex flex-row space-x-8 items-center justify-between">
                <a>
                  <svg width="6" height="12" viewBox="0 0 6 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3.89782 12V6.53514H5.67481L5.93895 4.39547H3.89782V3.03259C3.89782 2.41516 4.06363 1.99243 4.91774 1.99243H6V0.0847928C5.47342 0.0262443 4.94412 -0.00202566 4.41453 0.000112795C2.84383 0.000112795 1.76542 0.994936 1.76542 2.82122V4.39147H0V6.53114H1.76928V12H3.89782Z" fill="white" />
                  </svg>
                </a>
                <a>
                  <svg width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.99536 2.91345C5.17815 2.91345 4.39441 3.23809 3.81655 3.81594C3.2387 4.3938 2.91406 5.17754 2.91406 5.99475C2.91406 6.81196 3.2387 7.5957 3.81655 8.17356C4.39441 8.75141 5.17815 9.07605 5.99536 9.07605C6.81257 9.07605 7.59631 8.75141 8.17417 8.17356C8.75202 7.5957 9.07666 6.81196 9.07666 5.99475C9.07666 5.17754 8.75202 4.3938 8.17417 3.81594C7.59631 3.23809 6.81257 2.91345 5.99536 2.91345ZM5.99536 7.99586C5.46446 7.99586 4.9553 7.78496 4.57989 7.40955C4.20448 7.03415 3.99358 6.52499 3.99358 5.99408C3.99358 5.46318 4.20448 4.95402 4.57989 4.57861C4.9553 4.20321 5.46446 3.99231 5.99536 3.99231C6.52626 3.99231 7.03542 4.20321 7.41083 4.57861C7.78624 4.95402 7.99714 5.46318 7.99714 5.99408C7.99714 6.52499 7.78624 7.03415 7.41083 7.40955C7.03542 7.78496 6.52626 7.99586 5.99536 7.99586Z" fill="white" />
                    <path d="M9.19863 3.51848C9.59537 3.51848 9.91698 3.19687 9.91698 2.80013C9.91698 2.4034 9.59537 2.08179 9.19863 2.08179C8.8019 2.08179 8.48029 2.4034 8.48029 2.80013C8.48029 3.19687 8.8019 3.51848 9.19863 3.51848Z" fill="white" />
                    <path d="M11.6821 2.06975C11.5279 1.67138 11.2921 1.30961 10.99 1.00759C10.6879 0.705576 10.326 0.469972 9.92759 0.31586C9.46135 0.140842 8.9688 0.0462069 8.4709 0.0359839C7.82919 0.00799638 7.62594 0 5.99867 0C4.37139 0 4.16282 -6.70254e-08 3.52643 0.0359839C3.02891 0.0456842 2.53671 0.140339 2.07108 0.31586C1.67255 0.469792 1.31059 0.705333 1.00844 1.00737C0.706289 1.30941 0.47061 1.67127 0.316526 2.06975C0.141474 2.53595 0.0470554 3.02855 0.0373167 3.52643C0.00866281 4.16748 0 4.37072 0 5.99867C0 7.62594 -4.96485e-09 7.83319 0.0373167 8.4709C0.0473123 8.96935 0.14127 9.46113 0.316526 9.92825C0.471042 10.3266 0.70695 10.6883 1.00918 10.9903C1.3114 11.2923 1.6733 11.5279 2.07175 11.6821C2.5365 11.8642 3.0289 11.9656 3.52777 11.982C4.16948 12.01 4.37272 12.0187 6 12.0187C7.62728 12.0187 7.83585 12.0187 8.47223 11.982C8.97008 11.9719 9.46262 11.8775 9.92892 11.7028C10.3272 11.5483 10.689 11.3125 10.9911 11.0104C11.2932 10.7083 11.529 10.3466 11.6835 9.94825C11.8587 9.48179 11.9527 8.99 11.9627 8.49156C11.9913 7.85051 12 7.64727 12 6.01932C12 4.39138 12 4.18481 11.9627 3.54709C11.9549 3.04216 11.86 2.54237 11.6821 2.06975ZM10.8705 8.42159C10.8662 8.80562 10.7961 9.18608 10.6633 9.54642C10.5632 9.80555 10.41 10.0409 10.2135 10.2372C10.017 10.4336 9.78162 10.5867 9.52243 10.6866C9.16608 10.8188 8.78967 10.8889 8.4096 10.8938C7.77654 10.9231 7.59796 10.9305 5.97468 10.9305C4.35007 10.9305 4.18414 10.9305 3.53909 10.8938C3.15921 10.8892 2.78298 10.8191 2.42692 10.6866C2.16683 10.5873 1.93048 10.4345 1.73316 10.2381C1.53584 10.0417 1.38194 9.80605 1.28143 9.54642C1.15045 9.18995 1.08039 8.81398 1.07419 8.43425C1.04554 7.8012 1.03887 7.62261 1.03887 5.99933C1.03887 4.37539 1.03887 4.20946 1.07419 3.56375C1.0785 3.17993 1.14859 2.7997 1.28143 2.43958C1.48467 1.91382 1.90116 1.5 2.42692 1.29876C2.78316 1.16691 3.15928 1.09682 3.53909 1.09151C4.17281 1.06286 4.35073 1.05486 5.97468 1.05486C7.59862 1.05486 7.76522 1.05486 8.4096 1.09151C8.7897 1.09609 9.16617 1.1662 9.52243 1.29876C9.7816 1.39889 10.017 1.55211 10.2134 1.74858C10.4099 1.94504 10.5631 2.18041 10.6633 2.43958C10.7942 2.79606 10.8643 3.17203 10.8705 3.55175C10.8992 4.18547 10.9065 4.36339 10.9065 5.98734C10.9065 7.61062 10.9065 7.78521 10.8778 8.42226H10.8705V8.42159Z" fill="white" />
                  </svg>
                </a>
                <a href="https://www.youtube.com/channel/UCjtCbnkIaiCJgj13sEZ9iqw">
                  <svg width="13" height="9" viewBox="0 0 13 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.7355 1.415C12.6616 1.14357 12.517 0.896024 12.3162 0.697014C12.1154 0.498004 11.8654 0.354468 11.5911 0.280692C10.5739 0.00450089 6.5045 4.87928e-06 6.5045 4.87928e-06C6.5045 4.87928e-06 2.43578 -0.00449139 1.41795 0.259496C1.14379 0.336667 0.894302 0.482233 0.693428 0.68222C0.492554 0.882207 0.347041 1.1299 0.270859 1.40152C0.00259923 2.40737 9.51671e-07 4.49358 9.51671e-07 4.49358C9.51671e-07 4.49358 -0.0025972 6.59006 0.263714 7.58564C0.413109 8.13609 0.851549 8.57094 1.40885 8.71931C2.43643 8.9955 6.49476 9 6.49476 9C6.49476 9 10.5641 9.00449 11.5813 8.74115C11.8557 8.6675 12.106 8.52429 12.3073 8.32569C12.5086 8.12709 12.6539 7.87996 12.729 7.60876C12.998 6.60355 12.9999 4.51798 12.9999 4.51798C12.9999 4.51798 13.0129 2.42086 12.7355 1.415ZM5.20282 6.42628L5.20607 2.57244L8.58823 4.50257L5.20282 6.42628Z" fill="white" />
                  </svg>
                </a>
              </div>
            </div>
            <hr class="border-gray-600" />
            <p class="w-full text-center my-12 text-gray-600">Copyright © 2020 Besnik Creative</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer3
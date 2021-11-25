<template>
  <div
    class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 rounded"
  >
    <div class="block w-full overflow-x-auto">
      <!-- Projects table -->
      <table class="items-center w-full bg-transparent border-collapse">
        <thead>
          <tr>
            <th
              class="bg-gray-100 text-gray-600 border-gray-200 px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left"
            >
              Rider
            </th>
            <th
              class="bg-gray-100 text-gray-600 border-gray-200 px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left"
            >
              Email address
            </th>
            <th
              class="bg-gray-100 text-gray-600 border-gray-200 px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left"
            >
              Rider ID
            </th>
            <th
              class="bg-gray-100 text-gray-600 border-gray-200 px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left"
            >
              Address
            </th>
            <th
              class="bg-gray-100 text-gray-600 border-gray-200 px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left"
            >
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(rider, index) in riders" :key="index">
            <th
              class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4 text-left flex items-center"
            >
              <router-link to="/view-riders/2">
                <img
                  :src="rider.img"
                  class="h-12 w-12 bg-white rounded-full border"
                  style="display: inline-block"
                  alt="..."
                />
                <span class="text-gray-700 ml-2 pr-4 font-bold">
                  {{ rider.name }}
                </span>
              </router-link>
            </th>
            <td
              class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4"
            >
              <a :href="`mailto:${rider.email}`">{{ rider.email }}</a>
            </td>
            <td
              class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4"
            >
              #k23j42l23
            </td>
            <td
              class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4"
            >
              <p class="text-gray-500 text-sm mb-1">
                <i class="fas fa-thumbtack f-10"></i>
                {{ rider.location }}
              </p>
            </td>
            <td
              class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4"
            >
              <button
                class="bg-primary text-capitalize text-white active:bg-green-600 font-bold text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
              >
                Accept Request
              </button>

              <button
                class="text-primary bg-transparent border border-solid border-green-500 hover:bg-green-500 hover:text-white active:bg-green-600 font-bold text-xs px-4 py-2 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
              >
                Decline
              </button>
              <vs-dropdown>
                <a
                  class="text-primary bg-transparent border border-solid border-green-500 hover:bg-green-500 hover:text-white active:bg-green-600 font-bold uppercase text-xs px-4 py-2 rounded mr-1 mb-1 ease-linear transition-all duration-150"
                  href="#"
                >
                  <i class="fa fa-ellipsis-v"></i>
                </a>

                <vs-dropdown-menu>
                  <vs-dropdown-item> View Profile </vs-dropdown-item>
                  <vs-dropdown-item> Delete </vs-dropdown-item>
                </vs-dropdown-menu>
              </vs-dropdown>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
export default {
  mounted: function () {},
  data() {
    return {
      riders: [
        {
          name: "Salauden Ibrahim",
          location: "Anthony, Lagos",
          email: "saludeenibrahi@gmail.com",
          img:
            "https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/c5/c56d74485723004bbe42d91473840c2a55fbeee3_full.jpg",
        },
        {
          name: "Hughes Jacobs",
          location: "Anthony, Lagos",
          email: "saludeenibrahi@gmail.com",
          img:
            "https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/98/98e36522c2aa5ea8088db67d6b22c1552850bf10_full.jpg",
        },
        {
          name: "Selena Gomez",
          location: "Anthony, Lagos",
          email: "saludeenibrahi@gmail.com",
          img:
            "https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/f6/f6f46516965b11547bdca2acd090094f880a057f_full.jpg",
        },
        {
          name: "Jide Macaulay",
          location: "Anthony, Lagos",
          email: "saludeenibrahi@gmail.com",
          img:
            "https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/f5/f5bdcd357c92cd737012ce606023bbd80a6e6d81_full.jpg",
        },
        {
          name: "Salauden Ibrahim",
          location: "Anthony, Lagos",
          email: "saludeenibrahi@gmail.com",
          img:
            "https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/c5/c56d74485723004bbe42d91473840c2a55fbeee3_full.jpg",
        },
        {
          name: "Hughes Jacobs",
          location: "Anthony, Lagos",
          email: "saludeenibrahi@gmail.com",
          img:
            "https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/98/98e36522c2aa5ea8088db67d6b22c1552850bf10_full.jpg",
        },
      ],
    };
  },
};
</script>

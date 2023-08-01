document.querySelector('#codeMapGetters').value = 
`import { mapGetters } from 'vuex'

computed: {
    ...mapGetters({
        exampleData: 'example/exampleData',
        exampleDataSecond: 'example/exampleDataSecond',
    })
}`
document.querySelector('#codeMapAction').value = 
`this.$store.dispatch('example/exampleActionFunction', data)`
document.querySelector('#codeStoreMutation').value = 
`mutations: {
    SET_EXAMPLE_DATA: (state, data) => state.exampleData = data,
},`
document.querySelector('#codeComponentImports').value = 
`components: {
    HeaderDeleted: () => import('~/components/common/the-header/HeaderDeleted.vue'),
    
    ContractsIcon: () => import('~/components/common/icons/ContractsIcon.vue'),
    DeletedFilesIcon: () => import('~/components/common/icons/DeletedFilesIcon.vue'),
    FolderIcon: () => import('~/components/common/icons/FolderIcon.vue'),
    ClipIcon: () => import('~/components/common/icons/ClipIcon.vue'),

    SkeletonProjectsFolder: () => import('~/components/common/skeletons/SkeletonProjectsFolder.vue'),
},`
const tels = document.querySelectorAll("input[type=\"tel\"]");

if (tels) {
    tels.forEach(el => {
        IMask(el, { mask: "+ {0} (000) 000 00 000 00" });
    });
}
const observer = lozad('.lozad', {
    loaded: function(img) {
        img.addEventListener('load', function() {
            img.classList.add('loaded');
        });
        
        if(img.hasAttribute('data-background-image')) {
            img.classList.add('loaded');
        };
    },
});


observer.observe();
const smoothLinks = document.querySelectorAll('a[href^="#"]');
if (smoothLinks) {
    for (let smoothLink of smoothLinks) {
        smoothLink.addEventListener('click', function (e) {
            e.preventDefault();
            const id = smoothLink.getAttribute('href');
    
            if (id === "#") return
            document.querySelector(id).scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        });
    };
}
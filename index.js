let matcher = /^$/;
let processor = function identity(x){
    return x;
}

let process_config = hexo.config.filelink_prosessor;

if(process_config){
    switch(process_config.type){
        case 'file':
            matcher = /(?<=\[.*\]\()(.*)(?=\))/;
            break;
        case 'image':
            matcher = /(?<=!\[.*\]\()(.*)(?=\))/;
            break;
        case 'both':
            matcher = /(?<=!?\[.*\]\()(.*)(?=\))/
    }

    if(process_config.slice){
        processor = function(x){
            return x.slice(process_config.slice);
        }
    }

    if(process_config.pre_append){
        let old = processor;
        processor = function(x){
            return  process_config.pre_append + old(x);        
        }
    }
}

hexo.extend.filter.register('before_post_render',function(data){
    data.content = data.content.replace(matcher,processor);
});
const translation = [];
const saveThisTranslation = () => {
    const chinese = document.getElementById('tw-source-text-ta').value;
    const pinyin = document.getElementById('tw-source-rmn').getElementsByClassName('Y2IQFc')[0].innerHTML;
    const eng = document.getElementById('tw-target-text').getElementsByClassName('Y2IQFc')[0].innerHTML;
    translation.push({eng, chinese, pinyin});
}
document.getElementById('save-translation').addEventListener("click",saveThisTranslation)

var sidevar_template = document.getElementsByClassName("notion-gallery-view")[0];
var sidebar = document.createElement("div");
sidebar.innerHTML = `    <div class="sidebar">
<div class="upload">템플릿 업로드</div>
<input type="text" class="search_title" id="search_title" onkeyup="searching()" placeholder="제목이나 #태그를 검색하세요">
<div id="tagbar">
    <div class="tag_list">
        <div class="tag_title">
            형식
        </div>
        <div class="tags">
            <div class="tag" onclick="search_tag(this)">#올인원</div>
            <div class="tag" onclick="search_tag(this)">#문서</div>
            <div class="tag" onclick="search_tag(this)">#위키</div>
            <div class="tag" onclick="search_tag(this)">#캘린더</div>
            <div class="tag" onclick="search_tag(this)">#리스트</div>
            <div class="tag" onclick="search_tag(this)">#데이터베이스</div>
            <div class="tag" onclick="search_tag(this)">#플래너</div>
            <div class="tag" onclick="search_tag(this)">#Todo</div>
            <div class="tag" onclick="search_tag(this)">#일기</div>
            <div class="tag" onclick="search_tag(this)">#웹사이트</div>
        </div>
    </div>
    <div class="tag_list">
        <div class="tag_title">
            대상
        </div>
        <div class="tags">
            <div class="tag" onclick="search_tag(this)">#모두</div>
            <div class="tag" onclick="search_tag(this)">#개인</div>
            <div class="tag" onclick="search_tag(this)">#협업</div>
            <div class="tag" onclick="search_tag(this)">#직장인</div>
            <div class="tag" onclick="search_tag(this)">#교육</div>
            <div class="tag" onclick="search_tag(this)">#마케터</div>
            <div class="tag" onclick="search_tag(this)">#디자이너</div>
            <div class="tag" onclick="search_tag(this)">#개발자</div>
        </div>
    </div>
    <div class="tag_list">
        <div class="tag_title">
            기타
        </div>
        <div class="tags">
            <div class="tag" onclick="search_tag(this)">#자세한 설명</div>
            <div class="tag" onclick="search_tag(this)">#스크립트 필요</div>
            <div class="tag" onclick="search_tag(this)">#설정 필요</div>
            <div class="tag" onclick="search_tag(this)">#Oopy 필요</div>
            <div class="tag" onclick="search_tag(this)">#조금 어려움</div>
            <div class="tag" onclick="search_tag(this)">#쉬움</div>
        </div>
    </div>
</div>
</div>`;

sidevar_template.prepend(sidebar);

function searching() {
    let value, name, item, i, ii, tags;

    value = document.getElementById("search_title").value.toUpperCase();
    item = document.getElementsByClassName("notion-collection-item");

    if (value == "") {
        //전체보기
        console.log("전체 보기")
        for (i = 0; i < item.length; i++) {
            item[i].style.display = "block";
        }
    } else if (value.startsWith("#")) {
        // 태그 검색
        console.log("태그 검색 " + value)
        for (i = 0; i < item.length; i++) {
            tags = item[i].querySelectorAll("a>div>div:nth-child(3)>div:nth-child(1)>div>div>div");
            for (ii = 0; ii < tags.length; ii++) {
                if (tags[ii].innerHTML.toUpperCase().indexOf(value) > -1) {
                    item[i].style.display = "block";
                    break;
                } else {
                    item[i].style.display = "none";
                }
            }
        }
    } else {
        //제목 검색
        console.log("검색 " + value)
        for (i = 0; i < item.length; i++) {
            name = item[i].querySelector("a>div>div:nth-child(2)>div:last-child");
            if (name.innerHTML.toUpperCase().indexOf(value) > -1) {
                item[i].style.display = "block";
            } else {
                item[i].style.display = "ㅜㅐㅜㄷ";
            }
        }
    }
}

function search_tag(tag) {
    document.getElementById("search_title").value = tag.innerHTML;
    searching()
}
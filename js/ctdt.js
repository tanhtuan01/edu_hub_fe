createEditor("ttdt-dtts", "Thông tin đào tạo - đối tượng tuyển sinh")
createEditor("ttdt-qtdt", "Thông tin đào tạo - quy trình đào tạo")
createEditor("ttdt-dttn", "Thông tin đào tạo - đối tượng tốt nghiệp")
createEditor("chnn", "Cơ hội nghề nghiệp")
createEditor("cdr", "Chuẩn đầu ra")
createEditor("mtdt-ct", "Mục tiêu cụ thể")
createEditor("mtdt-c", "Mục tiêu chung")

function createEditor(selector, text) {
    CKEDITOR.ClassicEditor.create(document.getElementById(selector), {
        toolbar: {
            items: [

                'heading', '|',
                'bold', 'italic', 'strikethrough', 'underline', 'code', 'subscript', 'superscript', 'removeFormat', '|',
                'bulletedList', 'numberedList', 'todoList', '|',
                'outdent', 'indent', '|',
                'undo', 'redo', '-',
                'fontSize', 'fontFamily', 'fontColor', 'fontBackgroundColor', 'highlight', '|',
                'alignment', '|',
                'link', 'uploadImage', 'blockQuote', 'mediaEmbed', 'codeBlock', '|',
                'specialCharacters', 'horizontalLine', 'pageBreak', '|',
                'insertTable'
            ],
            shouldNotGroupWhenFull: true
        },
        language: 'vi',
        list: {
            properties: {
                styles: true,
                startIndex: true,
                reversed: true
            }
        },
        heading: {
            options: [
                { model: 'paragraph', title: 'Tiêu đề', class: 'ck-heading_paragraph' },
                { model: 'heading1', view: 'h1', title: 'Heading 1', class: 'ck-heading_heading1' },
                { model: 'heading2', view: 'h2', title: 'Heading 2', class: 'ck-heading_heading2' },
                { model: 'heading3', view: 'h3', title: 'Heading 3', class: 'ck-heading_heading3' },
                { model: 'heading4', view: 'h4', title: 'Heading 4', class: 'ck-heading_heading4' },
                { model: 'heading5', view: 'h5', title: 'Heading 5', class: 'ck-heading_heading5' },
                { model: 'heading6', view: 'h6', title: 'Heading 6', class: 'ck-heading_heading6' }
            ]
        },
        placeholder: text,
        fontFamily: {
            options: [
                'Mặc định',
                'Arial, Helvetica, sans-serif',
                'Courier New, Courier, monospace',
                'Georgia, serif',
                'Lucida Sans Unicode, Lucida Grande, sans-serif',
                'Tahoma, Geneva, sans-serif',
                'Times New Roman, Times, serif',
                'Trebuchet MS, Helvetica, sans-serif',
                'Verdana, Geneva, sans-serif'
            ],
            supportAllValues: true
        },
        fontSize: {
            options: [10, 12, 14, 'default', 18, 20, 22],
            supportAllValues: true
        },
        htmlSupport: {
            allow: [{
                name: /.*/,
                attributes: true,
                classes: true,
                styles: true
            }]
        },
        htmlEmbed: {
            showPreviews: true
        },
        link: {
            decorators: {
                addTargetToExternalLinks: true,
                defaultProtocol: 'https://',
                toggleDownloadable: {
                    mode: 'manual',
                    label: 'Downloadable',
                    attributes: {
                        download: 'file'
                    }
                }
            }
        },
        mention: {
            feeds: [{
                marker: '@',
                feed: [
                    '@apple', '@bears', '@brownie', '@cake', '@cake', '@candy', '@canes', '@chocolate', '@cookie', '@cotton', '@cream',
                    '@cupcake', '@danish', '@donut', '@dragée', '@fruitcake', '@gingerbread', '@gummi', '@ice', '@jelly-o',
                    '@liquorice', '@macaroon', '@marzipan', '@oat', '@pie', '@plum', '@pudding', '@sesame', '@snaps', '@soufflé',
                    '@sugar', '@sweet', '@topping', '@wafer'
                ],
                minimumCharacters: 1
            }]
        },
        removePlugins: [
            'AIAssistant',
            'CKBox',
            'CKFinder',
            'EasyImage',
            'RealTimeCollaborativeComments',
            'RealTimeCollaborativeTrackChanges',
            'RealTimeCollaborativeRevisionHistory',
            'PresenceList',
            'Comments',
            'TrackChanges',
            'TrackChangesData',
            'RevisionHistory',
            'Pagination',
            'WProofreader',
            'MathType',
            'SlashCommand',
            'Template',
            'DocumentOutline',
            'FormatPainter',
            'TableOfContents',
            'PasteFromOfficeEnhanced',
            'CaseChange'
        ]
    }).then(newEditor => {

    });
}

function changeProgram(e) {
    event.preventDefault()

    var iActive = document.querySelectorAll(".i.active")
    iActive.forEach((i) => {
        i.classList.remove("active")
    })

    e.querySelector(".i").classList.add("active")

    var i = e.dataset.stt
    var layout = `i-${i}`
    var selector = `.form-content.${layout}`

    var formContent = document.querySelectorAll(".form-content")

    formContent.forEach((f) => {
        f.classList.add("hidden")
    })

    document.querySelector(selector).classList.remove('hidden')
}

function nextProgram(e) {
    nextOrPrevious('next', e)
}

function previousProgram(e) {
    nextOrPrevious('previous', e)
}

function nextOrPrevious(act, e) {

    var i = e.dataset.stt

    if (act == 'next') {
        ++i
    } else {
        --i
    }

    var iActive = document.querySelectorAll(".i.active")
    iActive.forEach((i) => {
        i.classList.remove("active")
    })

    document.querySelector(`.i${i}`).classList.add("active")

    var layout = `i-${i}`

    var formContent = document.querySelectorAll(".form-content")

    formContent.forEach((f) => {
        f.classList.add("hidden")
    })

    var selector = `.form-content.${layout}`
    document.querySelector(selector).classList.remove('hidden')
}

function changeMTDT(e) {
    var mt = document.querySelectorAll(".mtdt .mt")

    mt.forEach((m) => {
        m.classList.remove("remove-bottom")
    })

    e.classList.add("remove-bottom")

    var mtTextarea = document.querySelectorAll(".mt-textarea")

    mtTextarea.forEach((m) => {
        m.classList.add("hidden")
    })

    if (e.classList.contains("mtdt-c")) {
        document.querySelector(".mtdt-c-textarea").classList.remove("hidden")
    } else {
        document.querySelector(".mtdt-ct-textarea").classList.remove("hidden")
    }
}

function changeTTDT(e) {

    var ttdt = document.querySelectorAll(".ttdt div")

    ttdt.forEach((t) => {
        t.classList.remove("remove-bottom")
    })

    e.classList.add("remove-bottom")

    var ttdto = document.querySelectorAll(".ttdt-o")

    ttdto.forEach((i) => {
        i.classList.add("hidden")
    })

    if (e.classList.contains("ttdt-1")) {
        document.querySelector(".ttdt-o.ttdt-tts").classList.remove("hidden")
    } else if (e.classList.contains("ttdt-2")) {
        document.querySelector(".ttdt-o.ttdt-dtts").classList.remove("hidden")
    } else if (e.classList.contains("ttdt-3")) {
        document.querySelector(".ttdt-o.ttdt-qtdt").classList.remove("hidden")
    } else if (e.classList.contains("ttdt-4")) {
        document.querySelector(".ttdt-o.ttdt-dttn").classList.remove("hidden")
    }
}
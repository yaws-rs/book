// Populate the sidebar
//
// This is a script, and not included directly in the page, to control the total size of the book.
// The TOC contains an entry for each page, so if each page includes a copy of the TOC,
// the total size of the page becomes O(n**2).
class MDBookSidebarScrollbox extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = '<ol class="chapter"><li class="chapter-item expanded affix "><li class="part-title">Yaws</li><li class="chapter-item expanded "><a href="yaws/introduction.html"><strong aria-hidden="true">1.</strong> Introduction</a></li><li class="chapter-item expanded "><a href="yaws/architechture.html"><strong aria-hidden="true">2.</strong> Architecture</a></li><li class="chapter-item expanded "><a href="yaws/flavors.html"><strong aria-hidden="true">3.</strong> Flavors</a></li><li class="chapter-item expanded "><a href="yaws/validation.html"><strong aria-hidden="true">4.</strong> Validation</a></li><li class="chapter-item expanded "><a href="yaws/security.html"><strong aria-hidden="true">5.</strong> Security</a></li><li class="chapter-item expanded "><a href="yaws/performance.html"><strong aria-hidden="true">6.</strong> Performance</a></li><li class="chapter-item expanded "><a href="yaws/crypto.html"><strong aria-hidden="true">7.</strong> Cryptography</a></li><li class="chapter-item expanded affix "><li class="part-title">Yaws io_uring</li><li class="chapter-item expanded "><a href="io_uring/introduction.html"><strong aria-hidden="true">8.</strong> Introduction</a></li><li class="chapter-item expanded "><a href="io_uring/bearer.html"><strong aria-hidden="true">9.</strong> Bearer</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="io_uring/bearer/capacity.html"><strong aria-hidden="true">9.1.</strong> Capacity</a></li><li class="chapter-item expanded "><a href="io_uring/bearer/slabbable.html"><strong aria-hidden="true">9.2.</strong> Slabbable</a></li></ol></li><li class="chapter-item expanded "><a href="io_uring/opcode.html"><strong aria-hidden="true">10.</strong> OpCode</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="io_uring/opcode/accept.html"><strong aria-hidden="true">10.1.</strong> Accept</a></li><li class="chapter-item expanded "><a href="io_uring/opcode/epoll_ctl.html"><strong aria-hidden="true">10.2.</strong> EpollCtl</a></li><li class="chapter-item expanded "><a href="io_uring/opcode/futex_wait.html"><strong aria-hidden="true">10.3.</strong> FutexWait</a></li><li class="chapter-item expanded "><a href="io_uring/opcode/provide_buffers.html"><strong aria-hidden="true">10.4.</strong> ProvideBuffers</a></li><li class="chapter-item expanded "><a href="io_uring/opcode/recv.html"><strong aria-hidden="true">10.5.</strong> Recv</a></li><li class="chapter-item expanded "><a href="io_uring/opcode/recv_multi.html"><strong aria-hidden="true">10.6.</strong> RecvMulti</a></li><li class="chapter-item expanded "><a href="io_uring/opcode/send_zc.html"><strong aria-hidden="true">10.7.</strong> SendZc</a></li><li class="chapter-item expanded "><a href="io_uring/opcode/extensions.html"><strong aria-hidden="true">10.8.</strong> Extensions</a></li></ol></li><li class="chapter-item expanded "><a href="io_uring/ownership.html"><strong aria-hidden="true">11.</strong> Ownership</a></li><li class="chapter-item expanded "><a href="io_uring/fd.html"><strong aria-hidden="true">12.</strong> Filehandles</a></li><li class="chapter-item expanded "><a href="io_uring/buffers.html"><strong aria-hidden="true">13.</strong> Buffers</a></li></ol>';
        // Set the current, active page, and reveal it if it's hidden
        let current_page = document.location.href.toString().split("#")[0];
        if (current_page.endsWith("/")) {
            current_page += "index.html";
        }
        var links = Array.prototype.slice.call(this.querySelectorAll("a"));
        var l = links.length;
        for (var i = 0; i < l; ++i) {
            var link = links[i];
            var href = link.getAttribute("href");
            if (href && !href.startsWith("#") && !/^(?:[a-z+]+:)?\/\//.test(href)) {
                link.href = path_to_root + href;
            }
            // The "index" page is supposed to alias the first chapter in the book.
            if (link.href === current_page || (i === 0 && path_to_root === "" && current_page.endsWith("/index.html"))) {
                link.classList.add("active");
                var parent = link.parentElement;
                if (parent && parent.classList.contains("chapter-item")) {
                    parent.classList.add("expanded");
                }
                while (parent) {
                    if (parent.tagName === "LI" && parent.previousElementSibling) {
                        if (parent.previousElementSibling.classList.contains("chapter-item")) {
                            parent.previousElementSibling.classList.add("expanded");
                        }
                    }
                    parent = parent.parentElement;
                }
            }
        }
        // Track and set sidebar scroll position
        this.addEventListener('click', function(e) {
            if (e.target.tagName === 'A') {
                sessionStorage.setItem('sidebar-scroll', this.scrollTop);
            }
        }, { passive: true });
        var sidebarScrollTop = sessionStorage.getItem('sidebar-scroll');
        sessionStorage.removeItem('sidebar-scroll');
        if (sidebarScrollTop) {
            // preserve sidebar scroll position when navigating via links within sidebar
            this.scrollTop = sidebarScrollTop;
        } else {
            // scroll sidebar to current active section when navigating via "next/previous chapter" buttons
            var activeSection = document.querySelector('#sidebar .active');
            if (activeSection) {
                activeSection.scrollIntoView({ block: 'center' });
            }
        }
        // Toggle buttons
        var sidebarAnchorToggles = document.querySelectorAll('#sidebar a.toggle');
        function toggleSection(ev) {
            ev.currentTarget.parentElement.classList.toggle('expanded');
        }
        Array.from(sidebarAnchorToggles).forEach(function (el) {
            el.addEventListener('click', toggleSection);
        });
    }
}
window.customElements.define("mdbook-sidebar-scrollbox", MDBookSidebarScrollbox);

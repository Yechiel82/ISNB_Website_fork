from playwright.sync_api import sync_playwright
import time

def run(playwright):
    browser = playwright.chromium.launch(headless=True)
    page = browser.new_page()

    try:
        # Verify Product Page (Search & Filter)
        print("Navigating to Product Page...")
        page.goto("http://localhost:3000/product")
        # Check for search input
        page.wait_for_selector("input[placeholder='Search books...']")
        page.screenshot(path="product_page_search.png")
        print("Product Page Search captured.")

        # Test Filter interaction
        print("Testing Search Interaction...")
        page.fill("input[placeholder='Search books...']", "guru")
        time.sleep(1) # wait for render
        page.screenshot(path="product_search_result.png")
        print("Product Search Result captured.")

        # Verify Contact Page
        print("Navigating to Contact Page...")
        page.goto("http://localhost:3000/contact")
        page.wait_for_selector("form")
        page.screenshot(path="contact_page.png")
        print("Contact Page captured.")

        # Verify Flipbook Library
        print("Navigating to Flipbook Library...")
        page.goto("http://localhost:3000/flip-book")
        page.wait_for_selector("text=Perpustakaan Digital")
        page.screenshot(path="flipbook_library.png")
        print("Flipbook Library captured.")

    except Exception as e:
        print(f"Error: {e}")
    finally:
        browser.close()

with sync_playwright() as p:
    run(p)
